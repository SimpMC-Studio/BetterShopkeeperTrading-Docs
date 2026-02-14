#!/bin/bash

# Configuration
# Replace with your actual username and private repo name
TEMP_DIR="BetterShopkeeperTrading"

echo "🚀 Starting sync from private repository..."

# adding ssh key
mkdir -p ~/.ssh && echo '${{ secrets.ID_RSA }}' > ~/.ssh/id_rsa && chmod 600 ~/.ssh/id_rsa
git clone git@github.com:SimpMC-Studio/BetterShopkeeperTrading.git $TEMP_DIR

# 2. Check if the docs folder exists in the source
if [ -d "$TEMP_DIR/docs" ]; then
    echo "Found 'docs' folder. Syncing to root..."
    
    # Remove existing local docs folder if it exists to prevent merging old/new files
    rm -rf ./docs
    
    # Copy the docs folder from the private repo to the root of this repo
    cp -R $TEMP_DIR/docs ./docs
    
    echo "✅ Sync complete. Content is now in ./docs"
else
    echo "❌ Error: 'docs' folder not found in the root of the private repository."
    exit 1
fi

# 3. Cleanup the temporary clone
rm -rf $TEMP_DIR