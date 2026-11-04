with open('src/styles.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

header_lines = []
for i, line in enumerate(lines):
    if any(k in line for k in ['site-header-wrapper', 'header-inner', 'nav-center-links', 'nav-link-item', 'gamusa-header-flank', 'gamusa-top-woven-strip', 'header-right-controls', 'header-quick-search-btn', 'lang-pill', 'user-profile-circle', 'nav-dropdown']):
        header_lines.append((i+1, line.strip()))

print(f"Total matching lines in styles.css: {len(header_lines)}")
for num, line in header_lines[:30]:
    print(f"L{num}: {line}")
