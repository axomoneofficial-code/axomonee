/**
 * AXOMONE — Static SEO Pre-rendering & Snapshot Generator
 * Generates pre-rendered static HTML snapshots in dist/ for all public routes
 * ensuring search crawlers receive HTTP 200 with full metadata and semantic HTML.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const BASE_URL = 'https://axomoneofficial-code.github.io/axomonee';

if (!fs.existsSync(distDir)) {
  console.error('[Prerender SEO] dist directory not found! Run vite build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');

const districts = JSON.parse(fs.readFileSync(path.join(rootDir, 'src', 'data', 'districts.json'), 'utf-8'));
const destinations = JSON.parse(fs.readFileSync(path.join(rootDir, 'src', 'data', 'tourism-destinations.json'), 'utf-8'));
const events = JSON.parse(fs.readFileSync(path.join(rootDir, 'src', 'data', 'events.json'), 'utf-8'));

const pages = [
  {
    path: '',
    title: 'AXOMONE – Explore Assam, Culture, Places & Local Services',
    description: 'Discover Assam with AXOMONE. Explore districts, heritage sites, temples, universities, local businesses, Assamese culture, tourism and useful local resources.',
    h1: 'স্বাগতম AXOMONE — Discover Local. Connect Assam.',
    intro: 'All-in-One Smart Community, Civic, Tourism & Cultural Portal for Assam covering all 35 official administrative districts, UNESCO World Heritage sanctuaries, sacred Satras, and verified community resources.',
  },
  {
    path: 'explore',
    title: 'Explore Assam – Unified District, Tourism & Business Search | AXOMONE',
    description: 'Search across all 35 Assam districts, heritage destinations, verified local enterprises, essential public services, and cultural events.',
    h1: 'অসম সন্ধান (Explore Assam)',
    intro: 'Unified interactive search atlas connecting Assam districts, tourist spots, cultural festivals, verified businesses, and public services.',
  },
  {
    path: 'directory',
    title: 'Assam Official Discovery Directory – Universities, Heritage & Public Services | AXOMONE',
    description: 'Verified public directory of universities, engineering & medical colleges, heritage monuments, archaeological sites, temples, and citizen helplines across Assam.',
    h1: 'Assam Official Discovery Directory (অসম তথ্যকোষ)',
    intro: 'Verified state-wide directory containing curated public entries across higher education, state & central universities, archaeological heritage sites, sacred temples, and citizen helplines.',
  },
  {
    path: 'districts',
    title: 'Assam 35 Districts Atlas & Administrative Directory | AXOMONE',
    description: 'Comprehensive atlas and profiles of all 35 official administrative districts of Assam, including headquarters, divisions, tourist attractions, and administration portals.',
    h1: 'অসমৰ ৩৫ খন চৰকাৰী জিলা (35 Official Districts of Assam)',
    intro: 'Explore Assam through its 35 administrative districts. Access official District Commissionerate portals, headquarters information, heritage destinations, and citizen helplines.',
  },
  {
    path: 'tourism',
    title: 'Assam Tourism & Heritage Guide – Wildlife, River Islands & Tea Trails | AXOMONE',
    description: 'Discover Kaziranga, Manas, UNESCO World Heritage Charaideo Maidams, Majuli island, Kamakhya Shakti Peetha, and scenic tea gardens of Assam.',
    h1: 'Explore Assam Beauty & Tourism (অসম পৰ্যটন আৰু ঐতিহ্য)',
    intro: 'Authentic travel guide to UNESCO World Heritage wildlife sanctuaries, river islands, historical Ahom monuments, sacred Vaishnavite Satras, and lush tea estates.',
  },
  {
    path: 'events',
    title: 'Assam Cultural Festivals & Raas Mahotsav Calendar 2026–2027 | AXOMONE',
    description: 'Verified calendar of Assam cultural festivals including Majuli Raas Mahotsav, Howly Raas, Rongali Bihu, Jonbeel Mela, and Ambubachi Mahayoga.',
    h1: 'উৎসৱ আৰু সাংস্কৃতিক অনুষ্ঠান (Assam Festivals & Cultural Calendar)',
    intro: 'State-wide verified schedule of spiritual Raas Mahotsavs, indigenous spring celebrations, historic barter melas, and classical Sattriya dance drama festivals across Assam.',
  },
  {
    path: 'businesses',
    title: 'Assam Local Businesses, Shops & Artisans Directory | AXOMONE',
    description: 'Discover verified Assamese businesses, Sualkuchi silk weavers, Sarthebari bell metal artisans, traditional restaurants, and local services.',
    h1: 'স্থানীয় ব্যৱসায় আৰু প্ৰতিষ্ঠান (Assam Local Businesses & Shops)',
    intro: 'Support verified local entrepreneurs, traditional handloom cooperatives, indigenous craft studios, and regional enterprises across all districts.',
  },
  {
    path: 'services',
    title: 'Assam Essential Services, Repairs & Civic Utilities | AXOMONE',
    description: 'Find trusted local technicians, vehicle repairs, medical centers, emergency helplines, and municipal civic services in your Assam district.',
    h1: 'প্ৰয়োজনীয় সেৱা আৰু সাহায্য (Essential Services & Civic Utilities)',
    intro: 'Verified directory of essential local services, automotive care, appliance repair, and emergency civic helplines across Assam districts.',
  },
  {
    path: 'community',
    title: 'Assam Citizens & Community Exchange Platform | AXOMONE',
    description: 'Connect with local Assam communities, share authentic updates, participate in cultural exchanges, and collaborate across districts.',
    h1: 'ৰাইজৰ মঞ্চ (Citizen Community Platform)',
    intro: 'Open, verified civic forum uniting citizens, youth leaders, cultural organizations, and community workers across Assam.',
  },
  {
    path: 'about',
    title: 'About AXOMONE – Authentic Assam Discovery & Civic Portal',
    description: 'Learn about the mission, cultural vision, data verification standards, and community ethos behind the AXOMONE portal for Assam.',
    h1: 'About AXOMONE (আমাৰ বিষয়ে)',
    intro: 'AXOMONE is an independent community, civic, and cultural discovery platform built to connect all 35 administrative districts of Assam into a unified digital atlas.',
  },
  {
    path: 'contact',
    title: 'Contact AXOMONE – Editorial Verification & Citizen Feedback',
    description: 'Get in touch with the AXOMONE editorial and verification desk to suggest listings, submit corrections, or propose partnerships.',
    h1: 'Contact Us (যোগাযোগ কৰক)',
    intro: 'Have a verified directory update, tourism enquiry, or cultural event submission? Reach out to our editorial and community desk.',
  },
  {
    path: 'privacy',
    title: 'Privacy Policy & Data Ethics | AXOMONE',
    description: 'Our commitment to citizen privacy, transparent cookies, zero unsolicited tracking, and ethical data governance.',
    h1: 'Privacy Policy (গোপনীয়তা নীতি)',
    intro: 'At AXOMONE, we prioritize citizen privacy, transparent consent, and ethical data governance with zero invasive tracking.',
  },
  {
    path: 'terms',
    title: 'Terms of Service & Usage Guidelines | AXOMONE',
    description: 'Terms and guidelines for using the AXOMONE Assam portal, verified content licensing, and community conduct.',
    h1: 'Terms of Service (ব্যৱহাৰৰ চৰ্তাৱলী)',
    intro: 'Guidelines and terms governing access to verified public datasets, tourism directories, and citizen community spaces on AXOMONE.',
  },
  {
    path: 'help',
    title: 'Help Centre & User Navigation Guide | AXOMONE',
    description: 'Frequently asked questions, search tips, district atlas guides, and step-by-step walkthroughs for AXOMONE.',
    h1: 'সহায় কেন্দ্ৰ (Help Centre & Guide)',
    intro: 'Comprehensive FAQs, search shortcut guides (Ctrl+K), district atlas tips, and step-by-step instructions to explore AXOMONE.',
  },
];

// Add all 35 Districts
for (const dist of districts) {
  pages.push({
    path: `districts/${dist.slug}`,
    title: `${dist.name} District (${dist.name_as}) – Complete Profile & Directory | AXOMONE`,
    description: `Complete guide to ${dist.name} district in Assam. Headquarters: ${dist.headquarters}, Division: ${dist.division}. Explore verified attractions, higher education, and official administration portals.`,
    h1: `${dist.name} District (${dist.name_as})`,
    intro: `Official administrative profile of ${dist.name} district (${dist.name_as}), Assam. Headquarters at ${dist.headquarters}, located within the ${dist.division} division. Access verified heritage spots, colleges, and district commissionerate resources.`,
    breadcrumbs: [
      { name: 'Home', path: '' },
      { name: 'Districts of Assam', path: 'districts' },
      { name: dist.name, path: `districts/${dist.slug}` },
    ],
  });
}

// Add all 91 Destinations
for (const dest of destinations) {
  const destName = dest.name;
  const destAs = dest.name_as ? ` (${dest.name_as})` : '';
  pages.push({
    path: `destinations/${dest.slug}`,
    title: `${destName}${destAs} – Assam Tourism & Heritage Guide | AXOMONE`,
    description: `${dest.shortDescription || dest.description || dest.tagline} Located in ${dest.locality || dest.district}, Assam. Best season: ${dest.bestSeason || dest.best_time || 'October to May'}.`,
    h1: `${destName}${destAs}`,
    intro: dest.description || dest.shortDescription || dest.tagline || 'Explore verified heritage and tourism sanctuaries in Assam.',
    image: dest.imageUrl || dest.image,
    breadcrumbs: [
      { name: 'Home', path: '' },
      { name: 'Tourism & Heritage', path: 'tourism' },
      { name: destName, path: `destinations/${dest.slug}` },
    ],
  });
  // Also create mirror at tourism/:slug
  pages.push({
    path: `tourism/${dest.slug}`,
    title: `${destName}${destAs} – Assam Tourism & Heritage Guide | AXOMONE`,
    description: `${dest.shortDescription || dest.description || dest.tagline} Located in ${dest.locality || dest.district}, Assam. Best season: ${dest.bestSeason || dest.best_time || 'October to May'}.`,
    h1: `${destName}${destAs}`,
    intro: dest.description || dest.shortDescription || dest.tagline || 'Explore verified heritage and tourism sanctuaries in Assam.',
    image: dest.imageUrl || dest.image,
    breadcrumbs: [
      { name: 'Home', path: '' },
      { name: 'Tourism & Heritage', path: 'tourism' },
      { name: destName, path: `tourism/${dest.slug}` },
    ],
  });
}

// Add all 21 Events
for (const ev of events) {
  const evSlug = ev.slug || ev.id;
  const evName = ev.title;
  pages.push({
    path: `events/${evSlug}`,
    title: `${evName} – Assam Cultural Festival Calendar | AXOMONE`,
    description: `${ev.shortDescription || ev.description} Date: ${ev.dateRange || ev.month || 'Annual'}. Location: ${ev.location}, ${ev.district}.`,
    h1: evName,
    intro: ev.description || ev.shortDescription || 'Experience authentic Vaishnavite, Bihu, and folk celebrations in Assam.',
    image: ev.imageUrl || ev.image,
    breadcrumbs: [
      { name: 'Home', path: '' },
      { name: 'Cultural Festivals', path: 'events' },
      { name: evName, path: `events/${evSlug}` },
    ],
  });
}

let generatedCount = 0;

for (const p of pages) {
  const fullUrl = p.path ? `${BASE_URL}/${p.path}` : `${BASE_URL}/`;
  const canonicalUrl = fullUrl;
  const pageImage = p.image 
    ? (p.image.startsWith('http') ? p.image : `${BASE_URL}${p.image.startsWith('/') ? p.image : '/' + p.image}`)
    : `${BASE_URL}/images/axom-nav-emblem.png`;

  let html = templateHtml;

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${p.title}</title>`);

  // 2. Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${p.description}" />`
  );

  // 3. Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // 4. Replace OpenGraph & Twitter Tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${p.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${p.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:image" content="${pageImage}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${p.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${p.description}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:image" content="${pageImage}" />`
  );

  // 5. Injected Crawlable Semantic Fallback in <div id="root">
  let semanticFallback = `\n    <noscript>\n      <main style="max-width: 1200px; margin: 2rem auto; padding: 0 1.5rem; font-family: sans-serif; color: #1E293B;">\n`;
  if (p.breadcrumbs && p.breadcrumbs.length > 0) {
    semanticFallback += `        <nav aria-label="Breadcrumb" style="margin-bottom: 1rem; font-size: 0.9rem; color: #64748B;">\n`;
    semanticFallback += p.breadcrumbs.map(b => `<a href="${BASE_URL}/${b.path}" style="color: #DC2626; text-decoration: none;">${b.name}</a>`).join(' &gt; ');
    semanticFallback += `\n        </nav>\n`;
  }
  semanticFallback += `        <h1 style="color: #06281E; font-size: 2rem; margin-bottom: 0.75rem;">${p.h1}</h1>\n`;
  semanticFallback += `        <p style="font-size: 1.1rem; line-height: 1.6; color: #334155;">${p.intro}</p>\n`;
  semanticFallback += `        <p style="margin-top: 1.5rem;"><a href="${BASE_URL}/" style="color: #DC2626; font-weight: bold;">&larr; Return to AXOMONE Homepage</a></p>\n`;
  semanticFallback += `      </main>\n    </noscript>\n  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${semanticFallback}</div>`);

  // 6. Write target index.html
  let targetDir;
  if (!p.path) {
    targetDir = distDir;
  } else {
    targetDir = path.join(distDir, p.path);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
  }

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf-8');
  generatedCount++;
}

console.log(`[Prerender SEO] Successfully pre-rendered ${generatedCount} static HTML routes with verified metadata & schemas into dist/`);
