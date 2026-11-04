import os

def search_src(term):
    for root, dirs, files in os.walk('src'):
        for f in files:
            if f.endswith(('.ts', '.tsx')):
                fp = os.path.join(root, f)
                try:
                    with open(fp, 'r', encoding='utf-8') as handle:
                        for idx, line in enumerate(handle):
                            if term in line:
                                print(f"{fp}:{idx+1}: {line.strip()[:100]}")
                except Exception:
                    pass

print("Search fullDescription:")
search_src("fullDescription")
print("\nSearch historical:")
search_src("ঐতিহাসিক")
