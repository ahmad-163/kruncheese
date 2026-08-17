# Routing Setup Instructions

## Install React Router

Run this command in your terminal (open PowerShell as Administrator or use Git Bash):

```bash
npm install react-router-dom
```

## What Was Changed

1. **Created CategoryPage.jsx** - A dedicated page for each category (Deals, Burgers, Wraps, Sides, Dip, Drinks)
   - Exact same design as homepage
   - Same card layout and spacing
   - Same responsive grid (2 columns mobile, 6 columns desktop)

2. **Updated App.jsx** - Added React Router
   - Route `/` - Homepage with all categories
   - Route `/category/:category` - Individual category pages

3. **Updated Products.jsx** - Made banners clickable
   - Clicking any banner navigates to its dedicated page
   - Added hover effect on banners

## How It Works

- Click on any banner (Deals, Burgers, etc.) on the homepage
- You'll be taken to a dedicated page showing only that category's products
- The page design is identical to the reference image you provided
- Cards maintain exact same size, spacing, and layout

## Routes

- `/` - Homepage (all categories)
- `/category/Deals` - Deals page
- `/category/Burgers` - Burgers page  
- `/category/Wraps` - Wraps page
- `/category/Sides` - Sides page
- `/category/Dip` - Dip page
- `/category/Drinks` - Drinks page

After installing react-router-dom, your app will work perfectly!
