#!/bin/bash
cd /app/server/book-service
if [ ! -d "node_modules" ]; then
  echo "Installing node_modules"
  npm install
fi
echo "Running book-service"
npm run start
tail -f /dev/null