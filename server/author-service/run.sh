#!/bin/bash
cd /app
if [ ! -d "node_modules" ]; then
  echo "Installing node_modules"
  npm install
fi
echo "Running author-service"
ts-node-dev ./server.ts
tail -f /dev/null