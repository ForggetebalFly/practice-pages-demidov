import urllib.request, urllib.error, json, re
base='https://forggetebalfly.github.io/practice-pages-demidov/'
html=urllib.request.urlopen(base,timeout=30).read().decode()
print('Pages HTML: 200 OK')
assets=re.findall(r'(?:src|href)="([^"]+\.(?:js|css))"',html)
assert assets
for path in assets:
    address='https://forggetebalfly.github.io'+path
    response=urllib.request.urlopen(address,timeout=30)
    assert response.status==200
    print('Asset:',path,'200 OK')
raw='https://raw.githubusercontent.com/ForggetebalFly/practice-pages-demidov/gh-pages/static/db/data.json'
rows=json.load(urllib.request.urlopen(raw,timeout=30))
assert len(rows)==3
print('Production JSON:',len(rows),'materials; 200 OK')
try: response=urllib.request.urlopen(base+'unknown-route',timeout=30)
except urllib.error.HTTPError as error: response=error
fallback=response.read().decode()
assert response.status==404 and '<div id="root"></div>' in fallback
print('Fallback: 404.html contains React entry point')
print('All deployment checks passed')
