Рабочий прототип автоматизированной информационной системы "Электронный реестр музейной экспозиции"


Установка

git clone https://github.com/Nicarex/practice-catalog.git

npm install -g yarn nodemon

cd practice-catalog/server && yarn


Запуск сервера

cd practice-catalog/server && yarn dev


Изменение client

cd practice-catalog/client

npm install -g yarn && yarn

yarn build


Обновление файлов client в server - копирование файлов из client/build в server/app/views