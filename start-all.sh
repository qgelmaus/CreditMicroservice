#!/bin/bash

echo ""
echo " Starter Docker containers..."
docker-compose up -d



echo ""
echo " Venter på RabbitMQ..."
npx wait-on http://localhost:15672




echo ""
echo " Starter alle microservices..."
pnpm dev:all
