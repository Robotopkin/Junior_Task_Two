FROM node

WORKDIR /Junior_Task_3.2

COPY . /Junior_Task_3.2

RUN npm install

EXPOSE 3000

CMD ["node", "Junior_Task_2.js"]