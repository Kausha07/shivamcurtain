# 🌐 Setup shivamcurtainworks.com Domain

## ❌ Current Issue:
GitHub Pages shows "Domain does not resolve" because `shivamcurtainworks.com` is not purchased/configured.

## ✅ Solution: Buy Domain & Configure DNS

### Step 1: Buy Domain (₹800-1500/year)
**Recommended Providers:**
- **GoDaddy**: https://godaddy.com
- **Namecheap**: https://namecheap.com  
- **Hostinger**: https://hostinger.in

**Search for**: `shivamcurtainworks.com`

### Step 2: Configure DNS Records
After buying domain, add these DNS records:

**A Records (Apex Domain):**
```
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

**CNAME Record (WWW):**
```
Type: CNAME
Name: www
Value: kausha07.github.io
```

### Step 3: Wait for Propagation
- DNS changes take 24-48 hours
- GitHub will automatically detect and enable HTTPS

## 🔄 Alternative: Use Free Domain Now

If you want to use your website immediately:

1. **Remove CNAME file** (delete it)
2. **Use GitHub URL**: https://kausha07.github.io/shivamcurtain/
3. **Buy domain later** when ready

## 💰 Domain Cost:
- **shivamcurtainworks.com**: ₹800-1500/year
- **Free alternative**: Keep using shivamcurtainworks.work.gd

## 📞 Need Help?
Call domain provider support when purchasing for DNS setup assistance.

**Choose: Buy domain now OR use free domain until ready to purchase.**