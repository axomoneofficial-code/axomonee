/**
 * AXOMONE — Production Sitemap Generator
 * Generates standards-compliant XML sitemap pointing to live GitHub Pages repository.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://axomoneofficial-code.github.io/axomonee';
const TODAY = new Date().toISOString().split('T')[0];

const districtsFile = path.join(rootDir, 'src', 'data', 'districts.json');
const destinationsFile = path.join(rootDir, 'src', 'data', 'tourism-destinations.json');
const eventsFile = path.join(rootDir, 'src', 'data', 'events.json');

const districts = JSON.parse(fs.readFileSync(districtsFile, 'utf-8'));
const destinations = JSON.parse(fs.readFileSync(destinationsFile, 'utf-8'));
const events = JSON.parse(fs.readFileSync(eventsFile, 'utf-8'));

const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/explore', priority: '0.9', changefreq: 'daily' },
  { path: '/directory', priority: '0.9', changefreq: 'daily' },
  { path: '/districts', priority: '0.9', changefreq: 'weekly' },
  { path: '/tourism', priority: '0.9', changefreq: 'daily' },
  { path: '/events', priority: '0.9', changefreq: 'daily' },
  { path: '/businesses', priority: '0.8', changefreq: 'weekly' },
  { path: '/services', priority: '0.8', changefreq: 'weekly' },
  { path: '/opportunities', priority: '0.8', changefreq: 'weekly' },
  { path: '/community', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { path: '/terms', priority: '0.5', changefreq: 'yearly' },
  { path: '/help', priority: '0.7', changefreq: 'monthly' },
  { path: '/submit', priority: '0.6', changefreq: 'monthly' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// 1. Static Core Pages
for (const route of staticRoutes) {
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
  xml += `    <priority>${route.priority}</priority>\n`;
  xml += `  </url>\n`;
}

// 2. All 35 Official District Pages
for (const dist of districts) {
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/districts/${dist.slug}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.85</priority>\n`;
  xml += `  </url>\n`;
}

// 3. All 91 Verified Heritage & Tourism Destinations
for (const dest of destinations) {
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/destinations/${dest.slug}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.85</priority>\n`;
  xml += `  </url>\n`;
}

// 4. Cultural Events & Festivals
for (const ev of events) {
  const slug = ev.slug || ev.id;
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/events/${slug}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf-8');

console.log(`[Sitemap Generator] Generated valid sitemap with ${staticRoutes.length + districts.length + destinations.length + events.length} URLs at ${sitemapPath}`);
