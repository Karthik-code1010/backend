#FROM node:6
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
#COPY package.json /usr/src/app
#RUN npm cache clean
#RUN npm install
#COPY . /usr/src/app
#EXPOSE 3000
#CMD ["npm","start"]

FROM node:16

# Create app directory
WORKDIR /backend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 49160
CMD [ "node", "index.js" ]
