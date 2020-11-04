FROM node:15.0.1

WORKDIR /start-abot

COPY . .

RUN yarn cache clean --force
RUN rm -rf node_modules
RUN yarn install --production

RUN rm app/config.json
RUN rm app/config.example.json

ENTRYPOINT ["yarn", "start"]
