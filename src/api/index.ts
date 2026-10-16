export interface Material {id:number; title:string; status:string}
export async function getData():Promise<Material[]> {
 const url=import.meta.env.DEV
  ? 'http://localhost:3001/api/data'
  : 'https://raw.githubusercontent.com/ForggetebalFly/practice-pages-demidov/gh-pages/static/db/data.json';
 const response=await fetch(url);
 if(!response.ok) throw new Error(`HTTP ${response.status}`);
 return response.json();
}
