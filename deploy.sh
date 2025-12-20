#!/bin/bash
# Deployment Script for Logo Changes

echo "🚀 Deploying logo changes..."

# Add all changes
git add .

# Commit changes
git commit -m "Fix logo for Google & social media display - Add PNG versions, update meta tags"

# Push to GitHub (which will auto-deploy to GitHub Pages)
git push origin main

echo "✅ Deployment complete!"
echo "📋 Next steps:"
echo "1. Wait 2-3 minutes for GitHub Pages to update"
echo "2. Visit your site to verify changes"
echo "3. Request Google re-indexing"
echo "4. Test social media sharing"