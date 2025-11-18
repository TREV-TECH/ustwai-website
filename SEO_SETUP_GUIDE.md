# SEO Setup Guide - Ustawi Organic Farms Website

## 📋 Overview
This guide will help you configure all the SEO tracking tools that have been implemented on your website. Follow these steps to activate Google Analytics, Google Search Console, and Bing Webmaster Tools.

---

## 🎯 What's Been Implemented

✅ **Google Analytics 4 (GA4)** - Tracking code on all pages  
✅ **Google Search Console** - Verification meta tags on all pages  
✅ **Bing Webmaster Tools** - Verification meta tags on all pages  
✅ **Breadcrumb Schema** - Navigation markup on all subpages  
✅ **Updated Sitemap** - Current date (2025-11-18) on all pages  

---

## 1️⃣ Google Analytics 4 (GA4) Setup

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Start measuring"** or **"Admin"** (gear icon)
4. Create a new **Property** named "Ustawi Organic Farms"
5. Select your timezone: **East Africa Time (EAT)**
6. Click **"Create"** and accept the terms

### Step 2: Get Your Measurement ID
1. In your new property, click **"Data Streams"**
2. Click **"Add stream"** → Select **"Web"**
3. Enter your website URL: `https://ustawiorganics.org`
4. Click **"Create stream"**
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Update Your Website
Replace `GA_MEASUREMENT_ID` in all HTML files with your actual Measurement ID:

**Files to update:**
- `index.html` (line 122 and 127)
- `pages/about.html` (line 125 and 130)
- `pages/services.html` (line 108 and 113)
- `pages/product.html` (line 121 and 126)
- `pages/contact.html` (line 104 and 109)
- `pages/blog.html` (line 94 and 99)
- `pages/faq.html` (line 84 and 89)
- `pages/gallery.html` (line 86 and 91)

**Search for:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

**Replace with:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**And also replace:**
```javascript
gtag('config', 'GA_MEASUREMENT_ID');
```

**With:**
```javascript
gtag('config', 'G-XXXXXXXXXX');
```

### Step 4: Verify Installation
1. Open your website in a browser
2. Open browser DevTools (F12)
3. Go to **Network** tab
4. Reload the page
5. Search for `gtag/js` - you should see the request
6. Or use [Google Tag Assistant](https://tagassistant.google.com/)

---

## 2️⃣ Google Search Console Setup

### Step 1: Add Your Property
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click **"Add property"**
3. Select **"URL prefix"** method
4. Enter: `https://ustawiorganics.org`
5. Click **"Continue"**

### Step 2: Choose HTML Tag Verification Method
1. Select the **"HTML tag"** verification method
2. Copy the verification code (looks like: `<meta name="google-site-verification" content="abc123xyz...">`)
3. Extract just the content value (e.g., `abc123xyz...`)

### Step 3: Update Your Website
Replace `YOUR_VERIFICATION_CODE` in all HTML files with your actual verification code:

**Files to update:**
- `index.html` (line 131)
- `pages/about.html` (line 134)
- `pages/services.html` (line 117)
- `pages/product.html` (line 130)
- `pages/contact.html` (line 113)
- `pages/blog.html` (line 103)
- `pages/faq.html` (line 93)
- `pages/gallery.html` (line 95)

**Search for:**
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE">
```

**Replace with:**
```html
<meta name="google-site-verification" content="abc123xyz...">
```

### Step 4: Verify Ownership
1. After updating all files and deploying to your server
2. Return to Google Search Console
3. Click **"Verify"**
4. You should see a success message ✅

### Step 5: Submit Your Sitemap
1. In Google Search Console, go to **"Sitemaps"** (left menu)
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. Your sitemap should be processed within 24-48 hours

---

## 3️⃣ Bing Webmaster Tools Setup

### Step 1: Create Bing Webmaster Account
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Sign in with Microsoft account (or create one)
3. Click **"Add a site"**

### Step 2: Add Your Site
1. Enter your website URL: `https://ustawiorganics.org`
2. Click **"Add"**

### Step 3: Get Verification Code
1. Choose **"HTML Meta Tag"** verification method
2. Copy the verification code (looks like: `<meta name="msvalidate.01" content="ABC123...">`)
3. Extract just the content value (e.g., `ABC123...`)

### Step 4: Update Your Website
Replace `YOUR_BING_VERIFICATION_CODE` in all HTML files:

**Files to update:**
- `index.html` (line 134)
- `pages/about.html` (line 137)
- `pages/services.html` (line 120)
- `pages/product.html` (line 133)
- `pages/contact.html` (line 116)
- `pages/blog.html` (line 106)
- `pages/faq.html` (line 96)
- `pages/gallery.html` (line 98)

**Search for:**
```html
<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE">
```

**Replace with:**
```html
<meta name="msvalidate.01" content="ABC123...">
```

### Step 5: Verify Ownership
1. After updating files and deploying
2. Return to Bing Webmaster Tools
3. Click **"Verify"**
4. Wait for confirmation

### Step 6: Submit Sitemap to Bing
1. In Bing Webmaster Tools dashboard
2. Click **"Sitemaps"**
3. Enter: `https://ustawiorganics.org/sitemap.xml`
4. Click **"Submit"**

---

## 4️⃣ Deployment Checklist

Before deploying your updated website:

- [ ] All `GA_MEASUREMENT_ID` replaced with actual Google Analytics ID
- [ ] All `YOUR_VERIFICATION_CODE` replaced with actual Google verification code
- [ ] All `YOUR_BING_VERIFICATION_CODE` replaced with actual Bing verification code
- [ ] Test website locally to ensure no errors
- [ ] Deploy to production server
- [ ] Verify Google Analytics is tracking (check Real-Time reports)
- [ ] Verify Google Search Console ownership
- [ ] Verify Bing Webmaster Tools ownership
- [ ] Submit sitemaps to both Google and Bing

---

## 5️⃣ Quick Find & Replace Commands

### Using PowerShell (Windows)
```powershell
# Replace Google Analytics ID
Get-ChildItem -Path . -Filter *.html -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace 'GA_MEASUREMENT_ID', 'G-XXXXXXXXXX' | Set-Content $_.FullName
}

# Replace Google Search Console verification
Get-ChildItem -Path . -Filter *.html -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace 'YOUR_VERIFICATION_CODE', 'abc123xyz...' | Set-Content $_.FullName
}

# Replace Bing verification
Get-ChildItem -Path . -Filter *.html -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace 'YOUR_BING_VERIFICATION_CODE', 'ABC123...' | Set-Content $_.FullName
}
```

### Using VS Code
1. Press `Ctrl+Shift+H` (Find and Replace in Files)
2. Search: `GA_MEASUREMENT_ID`
3. Replace: Your actual GA4 ID
4. Click "Replace All"
5. Repeat for verification codes

---

## 6️⃣ Testing & Verification

### Test Google Analytics
1. Visit your website
2. Go to Google Analytics → **Reports** → **Realtime**
3. You should see yourself as an active user
4. Navigate to different pages to test tracking

### Test Search Console
1. After 24-48 hours, check **Performance** tab
2. You should start seeing search queries, clicks, and impressions
3. Check **Coverage** to ensure pages are being indexed

### Test Bing Webmaster Tools
1. Check **Site Explorer** to see indexed pages
2. Review **SEO Reports** for any issues
3. Monitor **Search Performance** for traffic data

---

## 7️⃣ Additional SEO Enhancements Implemented

### ✅ Breadcrumb Schema Markup
All subpages now have breadcrumb structured data for better navigation understanding by search engines.

**Example:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

### ✅ Updated Sitemap
- All pages updated with current date (2025-11-18)
- Located at: `sitemap.xml`
- Accessible at: `https://ustawiorganics.org/sitemap.xml`

### ✅ Robots.txt
- Properly configured for search engine crawling
- Sitemap location specified
- Located at: `robots.txt`

---

## 8️⃣ Monitoring & Maintenance

### Weekly Tasks
- [ ] Check Google Analytics for traffic trends
- [ ] Review Search Console for any coverage issues
- [ ] Monitor search performance metrics

### Monthly Tasks
- [ ] Analyze top-performing pages
- [ ] Review search queries and optimize content
- [ ] Check for any crawl errors or issues
- [ ] Update sitemap dates if major content changes

### Quarterly Tasks
- [ ] Review and update meta descriptions
- [ ] Audit structured data implementation
- [ ] Analyze competitor SEO strategies
- [ ] Plan content based on search trends

---

## 9️⃣ Support & Resources

### Documentation
- [Google Analytics Help](https://support.google.com/analytics/)
- [Google Search Console Help](https://support.google.com/webmasters/)
- [Bing Webmaster Tools Help](https://www.bing.com/webmasters/help/)
- [Schema.org Documentation](https://schema.org/)

### Tools
- [Google Tag Assistant](https://tagassistant.google.com/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 🎉 Congratulations!

Once all steps are completed, your website will have:
- ✅ Complete analytics tracking
- ✅ Search engine verification
- ✅ Enhanced SEO with breadcrumb schemas
- ✅ Up-to-date sitemap
- ✅ Proper search engine indexing

**Your website is now fully optimized for search engines!**

---

**Last Updated:** November 18, 2025  
**Version:** 2.0  
**Contact:** For technical support, contact info@ustawiorganics.org
