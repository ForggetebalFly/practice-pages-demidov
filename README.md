# План учебной практики
React + TypeScript, автор Демидов Д.М., группа 634. Задание 7.
Установка: `npm ci`.
Разработка: в одном терминале `npm run serve`, в другом `npm run dev`.
В development данные загружаются с json-server: http://localhost:3001/api/data .
Сборка: `npm run build`. В production JSON загружается из static/db/data.json ветки gh-pages через raw.githubusercontent.com, отдельный сервер не требуется.
Деплой: `npm run deploy`; в Settings > Pages выбрать ветку gh-pages, папку /(root).
Vite base настроен на /practice-pages-demidov/. При другом имени репозитория измените base в vite.config.ts.
В отличие от исходной методички используется Vite вместо устаревшего create-react-app. Скрипт после Vite сборки копирует JSON и 404.html штатным модулем node:fs.
