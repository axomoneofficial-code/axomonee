import os

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.css', '.scss', '.ts', '.tsx')):
            p = os.path.join(root, f)
            try:
                with open(p, 'r', encoding='utf-8') as handle:
                    content = handle.read()
                    if 'site-header-wrapper' in content or 'nav-link-item' in content or 'header-inner' in content:
                        print(f"Found in {p}")
            except Exception:
                pass
