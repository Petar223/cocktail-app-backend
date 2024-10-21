#!/bin/bash
source .env
# Navigiraj do foldera aplikacije
cd /home/ubuntu/cocktail-app-backend

# Povuci najnoviji kod sa GitHub-a
echo "Pulling latest code from GitHub..."
git reset --hard
git pull origin master

docker network create cocktail-app-network

# Builduj i restartuj Docker kontejnere
echo "Building Docker containers..."
docker-compose -f docker-compose.prod.yaml up --build -d

docker run -ti --rm --net cocktail-app-network cocktail-app-backend-backend sh -c 'node importData.js'

# Opcionalno: Čišćenje starih Docker slika (ako koristiš image verzije)
docker image prune -f

echo "Deployment completed!"

