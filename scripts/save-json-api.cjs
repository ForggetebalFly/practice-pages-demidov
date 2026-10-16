const fs=require('node:fs');
const data=require('../src/server/db/index.cjs')();
fs.mkdirSync('dist/static/db',{recursive:true});
fs.writeFileSync('dist/static/db/data.json',JSON.stringify(data.data,null,2));
fs.copyFileSync('dist/index.html','dist/404.html');
console.log('Static JSON and 404.html copied to dist');
