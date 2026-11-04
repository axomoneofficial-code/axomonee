import json

with open('data/tourism-destinations.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for d in data[:5]:
    print(f"ID: {d.get('id')}")
    print(f"Name: {d.get('name')} | Name AS: {d.get('name_as')}")
    print(f"Keys: {list(d.keys())}")
    for k in d:
        if k.endswith(('_as', '_hi', '_bn', '_brx')):
            print(f"   {k}: {str(d[k])[:60]}")
    print("---")
