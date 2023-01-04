# cytb - create yourself telegram bot
project was created for explore new ~~for me~~ tools and technology in SPA


развернуть проект - npm i \
стартануть одной командой и сервер и клиент `npm run start` \
по отдельности в двух консолях `npm run start-client` - Для клиента \
`npm run start-server` - для сервера \

чтобы при изменении файлов в папке api не перезапускать каждый раз сервер api, нуно писать `npm run start-server-nodemon` или `npm run start-nodemon`





### Files
- __./api/__ - api server (node.js, crypto, fastify, sqllite3)
  - __database/crypto.js__ - всякие приколы с шифрованием
  - __database/sqlite.js__ - sql запросы к бд
  - __public/__ - файлы для SSR (server side rendering)
  - __app.js__ - сервер там fastify
  - __routes.js__ - роуты вынесены в отдельный файл
- __./src/__ - project dir (react.js, axios, scss)
  - __hooks/__ - custom react.js hooks
  - __functions/__ - reused functions
  - __styles/__ - глобальные стили
- __./components/__
  - __ui/__ - ui components
  - __sign/__ - login/registration forms
  - __main/__ - main app
