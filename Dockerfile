FROM node:15.0.1

WORKDIR /start-abot

COPY . .

RUN yarn cache clean --force
RUN rm -rf node_modules
RUN yarn install --production

ENTRYPOINT ["yarn", "start"]
