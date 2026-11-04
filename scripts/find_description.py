import os

def search_text(term):
    for root, dirs, files in os.walk('.'):
        if any(ignored in root for ignored in ['node_modules', '.git', 'dist']):
            continue
        for f in files:
            if f.endswith(('.json', '.ts', '.tsx', '.js', '.jsx')):
                fp = os.path.join(root, f)
                try:
                    with open(fp, 'r', encoding='utf-8') as handle:
                        for idx, line in enumerate(handle):
                            if term in line:
                                print(f"{fp}:{idx+1}: {line.strip()[:100]}")
                except Exception:
                    pass

search_text("Spanning 858")
search_text("alluvial floodplains")
