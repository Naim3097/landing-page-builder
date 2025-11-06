# Deployment Guide

## Quick Start: Push to GitHub

### 1. Initialize Git Repository (if not already done)

```bash
cd "c:\Users\sales\axtra LP builder"
git init
git add .
git commit -m "Initial commit: Axtra Landing Page Service with template gallery"
```

### 2. Connect to GitHub Repository

```bash
git remote add origin https://github.com/Naim3097/landing-page-builder.git
git branch -M main
```

### 3. Push to GitHub

```bash
git push -u origin main
```

## Automatic Deployment

Once pushed, GitHub Actions will automatically:
1. Detect the push to `main` branch
2. Deploy to GitHub Pages
3. Your site will be live at: https://naim3097.github.io/landing-page-builder/

## Enable GitHub Pages (First Time Setup)

1. Go to your repository: https://github.com/Naim3097/landing-page-builder
2. Click **Settings**
3. Scroll to **Pages** in the left sidebar
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save

The workflow file `.github/workflows/deploy.yml` will handle the rest!

## Verify Deployment

1. Go to **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (green checkmark)
4. Visit: https://naim3097.github.io/landing-page-builder/

## Update Deployment

To deploy updates:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push
```

GitHub Actions will automatically redeploy!

## Troubleshooting

### Issue: 404 Page Not Found
**Solution**: Make sure GitHub Pages source is set to "GitHub Actions" in repository settings.

### Issue: Workflow Not Running
**Solution**: 
1. Check `.github/workflows/deploy.yml` exists
2. Verify you pushed to `main` branch
3. Check repository permissions allow GitHub Actions

### Issue: Assets Not Loading
**Solution**: 
- The root `index.html` redirects to `src/index.html`
- All paths use relative URLs
- Images from Unsplash should load externally

## Project Structure for Deployment

```
Repository Root (/)
├── .github/workflows/deploy.yml  ✓ Auto-deployment
├── .gitignore                    ✓ Ignore unnecessary files
├── index.html                    ✓ Root redirect
├── README.md                     ✓ Documentation
├── src/
│   ├── index.html               ✓ Main app
│   ├── preview.html             ✓ Output page
│   └── assets/                  ✓ CSS & JS
├── data/                        ✓ JSON files
├── templates/                   ✓ Brief templates
└── docs/                        ✓ Documentation
```

All files are ready for deployment! ✅

## Commands Summary

```bash
# Navigate to project
cd "c:\Users\sales\axtra LP builder"

# If starting fresh
git init

# Add all files
git add .

# Commit
git commit -m "Deploy Axtra Landing Page Service"

# Set remote (first time only)
git remote add origin https://github.com/Naim3097/landing-page-builder.git

# Set branch to main
git branch -M main

# Push to GitHub
git push -u origin main

# For subsequent updates
git add .
git commit -m "Update message"
git push
```

---

## Post-Deployment Checklist

After deployment, verify:
- [ ] Site loads at GitHub Pages URL
- [ ] All 8 steps work correctly
- [ ] Template gallery opens and functions
- [ ] Data files load (industries, styles)
- [ ] Form submission generates output
- [ ] Preview page displays correctly
- [ ] Download functionality works
- [ ] Mobile responsive design works
- [ ] Browser console shows no errors

---

**Your site will be live in 2-3 minutes after pushing!** 🚀
