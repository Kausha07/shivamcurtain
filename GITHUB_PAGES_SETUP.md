# GitHub Pages Setup for shivamcurtainworks.com

## Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and create account
2. Click "New Repository"
3. Name: `shivamcurtainworks`
4. Make it **Public**
5. Click "Create Repository"

## Step 2: Upload Website Files
1. Click "uploading an existing file"
2. Drag and drop ALL files from your website folder:
   - index.html
   - css/styles.css
   - js/main.js
   - images/ (entire folder)
   - sitemap.xml
   - robots.txt
   - CNAME
3. Commit files

## Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Source: **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**
6. Click **Save**

## Step 4: Configure Custom Domain
1. In Pages settings, add custom domain: `shivamcurtainworks.com`
2. Check **Enforce HTTPS**
3. GitHub will verify domain

## Step 5: Domain DNS Settings
**At your domain registrar, add these DNS records:**

```
Type: CNAME
Name: www
Value: yourusername.github.io

Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

## Step 6: Wait & Verify
- DNS propagation: 24-48 hours
- SSL certificate: Automatic
- Your site will be live at: `https://shivamcurtainworks.com`

## ✅ Final Result:
- **URL:** https://shivamcurtainworks.com
- **SSL:** Automatic HTTPS
- **Speed:** Fast CDN
- **SEO:** Fully optimized
- **Cost:** FREE

**Need help with any step? Let me know!**