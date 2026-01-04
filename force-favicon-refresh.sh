#!/bin/bash
# Force Google Favicon Update Script

echo "🔄 Forcing Google to refresh favicon..."

# Add cache-busting parameter to favicon
TIMESTAMP=$(date +%s)

# Update HTML with cache-busting favicon
sed -i.bak "s|favicon.ico|favicon.ico?v=$TIMESTAMP|g" index.html

echo "✅ Added cache-busting parameter: ?v=$TIMESTAMP"
echo "📤 Deploying changes..."

# Deploy changes
git add .
git commit -m "Force favicon refresh with cache-busting parameter"
git push origin main

echo "🎯 Next steps:"
echo "1. Go to Google Search Console"
echo "2. Request indexing for your homepage"
echo "3. Wait 24-48 hours for Google to update"