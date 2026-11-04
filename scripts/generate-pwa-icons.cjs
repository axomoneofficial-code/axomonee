const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let j = 0; j < 8; j++) c = (c >>> 1) ^ (0xEDB88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crcBuf]);
}

function createPng(width, height, renderPixel) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdr = makeChunk('IHDR', ihdrData);

  const rawRows = [];
  for (let y = 0; y < height; y++) {
    const row = Buffer.alloc(1 + width * 4);
    row[0] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = renderPixel(x, y, width, height);
      const off = 1 + x * 4;
      row[off] = r;
      row[off + 1] = g;
      row[off + 2] = b;
      row[off + 3] = a;
    }
    rawRows.push(row);
  }

  const compressed = zlib.deflateSync(Buffer.concat(rawRows));
  const idat = makeChunk('IDAT', compressed);
  const iend = makeChunk('IEND', Buffer.alloc(0));
  return Buffer.concat([sig, ihdr, idat, iend]);
}

// Ensure public/icons directory exists
const outDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Write SVG Icon
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#991B1B" />
      <stop offset="50%" stop-color="#DC2626" />
      <stop offset="100%" stop-color="#B91C1C" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="50%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background with rounded corners -->
  <rect width="512" height="512" rx="108" fill="url(#bgGrad)" />

  <!-- Outer Traditional Gamusa Jacquard Woven Border -->
  <rect x="24" y="24" width="464" height="464" rx="88" fill="none" stroke="url(#goldGrad)" stroke-width="5" stroke-dasharray="16,8" opacity="0.85" />
  <rect x="36" y="36" width="440" height="440" rx="76" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.3" />

  <!-- Traditional Assamese Diamond Motifs in Corners -->
  <polygon points="256,58 274,76 256,94 238,76" fill="#FFFFFF" opacity="0.9" />
  <polygon points="256,418 274,436 256,454 238,436" fill="#FFFFFF" opacity="0.9" />
  <polygon points="58,256 76,274 94,256 76,238" fill="#FFFFFF" opacity="0.9" />
  <polygon points="418,256 436,274 454,256 436,238" fill="#FFFFFF" opacity="0.9" />

  <!-- Inner Gold Sun Circle -->
  <circle cx="256" cy="230" r="140" fill="#7F1D1D" stroke="url(#goldGrad)" stroke-width="8" filter="url(#shadow)" />
  <circle cx="256" cy="230" r="126" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="6,6" opacity="0.5" />

  <!-- Central Emblem: Great Indian One-Horned Rhino (Kaziranga Symbol of Assam) -->
  <g transform="translate(146, 125) scale(2.2)" filter="url(#shadow)">
    <text x="50" y="65" font-size="64" text-anchor="middle" dominant-baseline="central">🦏</text>
  </g>

  <!-- Brand Typography: AXOM ONE -->
  <text x="256" y="415" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">
    AXOM <tspan fill="#FDE68A">ONE</tspan>
  </text>
  <text x="256" y="445" font-family="'Hind Siliguri', 'Tiro Bangla', sans-serif" font-size="20" font-weight="700" fill="#FCA5A5" text-anchor="middle" letter-spacing="2">
    অসম এক মঞ্চ
  </text>
</svg>`;

fs.writeFileSync(path.join(outDir, 'icon.svg'), svgIcon, 'utf8');
console.log('✓ Wrote icon.svg');

// Render Pixel function for PNGs
function renderAxomPixel(x, y, w, h, isMaskable = false) {
  const cx = w / 2;
  const cy = h / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Gradient background
  const t = (x + y) / (w + h);
  const r = Math.round(153 * (1 - t) + 220 * t);
  const g = Math.round(27 * (1 - t) + 38 * t);
  const b = Math.round(27 * (1 - t) + 38 * t);

  // Rounded corner for standard icon (skip for maskable)
  if (!isMaskable) {
    const rx = Math.abs(dx);
    const ry = Math.abs(dy);
    const cornerR = w * 0.21;
    const innerW = cx - cornerR;
    const innerH = cy - cornerR;

    if (rx > innerW && ry > innerH) {
      const cDist = Math.sqrt((rx - innerW) ** 2 + (ry - innerH) ** 2);
      if (cDist > cornerR) return [0, 0, 0, 0]; // Transparent
    }
  }

  // Gold Ring border
  const ringRadius = w * 0.28;
  const ringWidth = w * 0.02;
  const distCenter = Math.sqrt(dx * dx + (dy + h * 0.05) ** 2);

  if (Math.abs(distCenter - ringRadius) < ringWidth) {
    // Gold ring
    return [245, 158, 11, 255];
  } else if (distCenter < ringRadius) {
    // Deep burgundy inside ring
    return [127, 29, 29, 255];
  }

  // Golden accent dashed boundary
  const borderDist = Math.max(Math.abs(dx), Math.abs(dy));
  if (borderDist > cx * 0.88 && borderDist < cx * 0.92) {
    return [253, 230, 138, 200];
  }

  return [r, g, b, 255];
}

// Generate PNGs
const sizes = [
  { name: 'icon-192.png', size: 192, maskable: false },
  { name: 'icon-512.png', size: 512, maskable: false },
  { name: 'icon-maskable-512.png', size: 512, maskable: true },
  { name: 'apple-touch-icon.png', size: 180, maskable: false },
];

for (const { name, size, maskable } of sizes) {
  const buf = createPng(size, size, (x, y, w, h) => renderAxomPixel(x, y, w, h, maskable));
  fs.writeFileSync(path.join(outDir, name), buf);
  console.log(`✓ Wrote ${name} (${size}x${size}, ${buf.length} bytes)`);
}
