FROM node:14

# USER node

WORKDIR /usr/src/app

# COPY --chown=node:node . .
COPY . .

# RUN npm ci --only-production
RUN npm i

ENV DEBUG=todo-app-backend:*

CMD npm start
