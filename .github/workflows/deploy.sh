#!/bin/bash

# Navigiraj do foldera aplikacije
cd /home/ubuntu/cocktail-app-backend

# Povuci najnoviji kod sa GitHub-a
echo "Pulling latest code from GitHub..."
git reset --hard
git pull origin master

# Builduj i restartuj Docker kontejnere
echo "Building Docker containers..."
docker-compose -f docker-compose.prod.yaml up --build -d

# Opcionalno: Čišćenje starih Docker slika (ako koristiš image verzije)
docker image prune -f

echo "Deployment completed!"
echo "PORT: " $PORT
