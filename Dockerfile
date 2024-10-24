# Use the official Node.js image.
FROM node:20-alpine

# Install necessary build tools for native dependencies
RUN apk update && apk add --no-cache \
    python3 \
    make \
    g++ \
    bash
# ENV NODE_ENV=$NODE_ENV
# ENV MONGO_ROOT_USER=$MONGO_ROOT_USER
# ENV MONGO_ROOT_PASSWORD=$MONGO_ROOT_PASSWORD
# ENV MONGO_HOST=$MONGO_HOST
# ENV MONGO_PORT=$MONGO_PORT
# ENV MONGO_DB=$MONGO_DB
# ENV JWT_SECRET=$JWT_SECRET
# ENV PORT=$PORT
# ENV MONGOEXPRESS_LOGIN=$MONGOEXPRESS_LOGIN
# ENV MONGOEXPRESS_PASSWORD=$MONGOEXPRESS_PASSWORD

# Copy app source code
RUN mkdir -p /home/app
COPY . /home/app

# Create and change to the app directory.
WORKDIR /home/app

# Install app dependencies
COPY package.json ./


RUN npm install
RUN npm rebuild bcrypt --build-from-source

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
