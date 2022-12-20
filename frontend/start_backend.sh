#!/bin/bash


echo -ne "\033[34mInitializing Docker MySQL Database Service...\033[m\r"

# cd /home/mauricio/Programing/typescript/DBF-II/todolist
# docker-compose up -d
docker start todolistmysql

echo -e "\033[34mInitializing Docker MySQL Database Service...\U2705\033[m"





echo -ne "\033[34mInitializing NestJS ToDoList Backend...\033[m\r"

cd /home/mauricio/Programing/typescript/DBF-II/todolist/backend
npm run start:dev

echo -e "\033[34mInitializing NestJS ToDoList Backend...\U2705\033[m"