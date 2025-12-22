# DNS TXT Record Setup for Google Search Console

## Steps to Add TXT Record:

### 1. Get your TXT record from Google Search Console
It looks like: `google-site-verification=XXXXXXXXXXXXX`

### 2. Go to your domain provider:
- **GoDaddy**: https://dcc.godaddy.com/manage/dns
- **Namecheap**: https://ap.www.namecheap.com/domains/list/
- **Hostinger**: https://hpanel.hostinger.com/domains

### 3. Add DNS Record:
- **Type**: TXT
- **Name/Host**: @ (or leave blank)
- **Value**: Paste the full TXT record from Google
- **TTL**: 3600 (or default)

### 4. Save and wait 5-10 minutes

### 5. Click "Verify" in Google Search Console

## ⚡ FASTER METHOD - Use HTML File (Already Done!)

Your site already has: `google411b1e63b2a6f7df.html`

Just select "HTML file" method in Search Console and click Verify!