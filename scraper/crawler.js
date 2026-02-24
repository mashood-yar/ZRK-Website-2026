const cheerio = require('cheerio');
const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

const BASE_URL = 'https://www.zrkgroup.com';
// These are the actual correct slugs we found organically from their navbar
const TARGET_PAGES = [
    '/about',
    '/products',
    '/contact-info',
    '/e1',
    '/environment',
    '/designstudio',
    '/catalogues',
    '/find-a-dealer',
    '/projects',
    '/news',
    '/careers',
    '/faq'
];

const CONTENT_DIR = path.join(__dirname, '../src/content');
const ASSETS_DIR = path.join(__dirname, '../public/assets');

async function downloadAsset(url, savePath) {
    try {
        if (url.startsWith('data:')) return;
        if (!url.startsWith('http')) {
            if (url.startsWith('//')) {
                url = 'https:' + url;
            } else {
                url = new URL(url, BASE_URL).href;
            }
        }

        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
            validateStatus: false,
            timeout: 15000,
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });

        if (response.status === 200) {
            const writer = fs.createWriteStream(savePath);
            response.data.pipe(writer);
            return new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });
        }
    } catch (err) {
        // ignore
    }
}

function getFileName(url) {
    try {
        const parsed = new URL(url, BASE_URL);
        let basename = path.basename(parsed.pathname);
        if (!basename) basename = 'index.jpg';
        return basename;
    } catch (e) {
        return 'unknown_' + Date.now();
    }
}

async function scrapePage(pageUrl, slug) {
    console.log(`Scraping ${pageUrl}...`);
    try {
        const response = await axios.get(pageUrl, {
            timeout: 15000,
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        const html = response.data;
        const $ = cheerio.load(html);

        const texts = (selector) => {
            const arr = [];
            $(selector).each((i, el) => {
                const text = $(el).text().trim();
                if (text) arr.push(text);
            });
            return arr;
        };

        const attributes = (selector, attr) => {
            const arr = [];
            $(selector).each((i, el) => {
                const a = $(el).attr(attr);
                if (a) arr.push(a);
            });
            return arr;
        };

        const links = [];
        $('a').each((i, el) => {
            const text = $(el).text().trim();
            const href = $(el).attr('href');
            if (text && href) links.push({ text, href });
        });

        const data = {
            url: pageUrl,
            title: $('title').text().trim(),
            metaDescription: $('meta[name="description"]').attr('content') || '',
            headings: {
                h1: texts('h1'),
                h2: texts('h2'),
                h3: texts('h3'),
                h4: texts('h4'),
            },
            paragraphs: texts('p'),
            buttons: texts('button, a.btn, a.button'),
            links,
            images: attributes('img', 'src'),
            videos: attributes('video source, iframe', 'src'),
            lists: texts('ul li, ol li')
        };

        const name = slug === '/' ? 'home' : slug.replace('/', '');
        await fs.outputJson(path.join(CONTENT_DIR, `${name}.json`), data, { spaces: 2 });
        console.log(`Saved JSON for ${name}`);

        const imagesDir = path.join(ASSETS_DIR, 'images', name);
        await fs.ensureDir(imagesDir);

        for (let i = 0; i < Math.min(data.images.length, 30); i++) {
            let imgUrl = data.images[i];
            if (imgUrl) {
                let filename = getFileName(imgUrl);
                await downloadAsset(imgUrl, path.join(imagesDir, filename));
            }
        }

        return data;
    } catch (error) {
        console.log(`Error scraping ${pageUrl}: ${error.message}`);
        return null;
    }
}

async function main() {
    await fs.ensureDir(CONTENT_DIR);
    await fs.ensureDir(path.join(ASSETS_DIR, 'images'));
    await fs.ensureDir(path.join(ASSETS_DIR, 'logo'));
    await fs.ensureDir(path.join(ASSETS_DIR, 'fonts'));

    const results = {};
    for (const slug of TARGET_PAGES) {
        const url = BASE_URL + (slug === '/' ? '' : slug);
        const data = await scrapePage(url, slug);
        if (data) {
            results[slug] = data;
        }
    }

    // Load existing SEO to merge
    let seoData = [];
    try { seoData = require(path.join(CONTENT_DIR, `seo.json`)); } catch (e) { }

    Object.keys(results).forEach(slug => {
        const existing = seoData.find(s => s.slug === slug);
        if (existing) {
            existing.title = results[slug].title;
            existing.description = results[slug].metaDescription;
        } else {
            seoData.push({
                slug,
                title: results[slug].title,
                description: results[slug].metaDescription
            });
        }
    });

    await fs.outputJson(path.join(CONTENT_DIR, `seo.json`), seoData, { spaces: 2 });

    console.log('Crawling remaining pages finished!');
}

main().catch(console.error);
