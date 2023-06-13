FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./
RUN npm install

#Create Database environmnent variable
ENV DATABASE_URL="file:./dev.db"

# Migration Dev Prisma
RUN npx prisma migrate dev

# Bundle app source
COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]