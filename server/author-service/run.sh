#!/bin/bash
cd /app/server/author-service
if [ ! -d "node_modules" ]; then
  echo "Installing node_modules"
  npm install
fi
echo "Running author-service"
npm run start
tail -f /dev/null