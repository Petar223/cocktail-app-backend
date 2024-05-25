# Use the official Node.js image.
FROM node:20.11.1

# Copy app source code
RUN mkdir -p /home/app
COPY . /home/app

# Create and change to the app directory.
WORKDIR /home/app

# Install app dependencies
# COPY package*.json ./
RUN npm install

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
