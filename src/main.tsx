import {useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {getData,type Material} from './api';
import './style.css';
function App(){
 const [rows,setRows]=useState<Material[]>([]);const [error,setError]=useState('');
 useEffect(()=>{getData().then(setRows).catch(e=>setError(String(e)));},[]);
 return <main><header><span>ГРУППА 634 · ДЕМИДОВ Д.М.</span><h1>План учебной практики</h1><p>React + TypeScript · GitHub Pages</p></header><section>{error?<p role="alert">{error}</p>:rows.map(r=><article key={r.id}><b>0{r.id}</b><div><h2>{r.title}</h2><p>{r.status}</p></div></article>)}</section><footer>Получено материалов: {rows.length} · Режим: {import.meta.env.DEV?'development':'production'}</footer></main>
}
createRoot(document.getElementById('root')!).render(<App/>);
