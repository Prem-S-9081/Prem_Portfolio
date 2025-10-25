# 🔐 Cybersecurity Portfolio Website

A modern, animated cybersecurity portfolio website with Matrix rain effects, 3D transforms, and neon green/cyber blue theme.

## 📁 Files Included

- `index.html` - Main HTML file
- `styles.css` - All styles and animations
- `script.js` - JavaScript for interactivity and Matrix effect

## 🚀 How to Use

### Option 1: Local Testing
1. Download and extract the ZIP file
2. Double-click `index.html` to open in your browser
3. That's it! No server needed.

### Option 2: Deploy to Web Hosting

#### GitHub Pages (FREE):
1. Create a new GitHub repository
2. Upload all 3 files (index.html, styles.css, script.js)
3. Go to Settings → Pages
4. Select "Deploy from branch" → main branch
5. Your site will be live at: `https://yourusername.github.io/repo-name`

#### Netlify (FREE):
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop all 3 files
3. Instant deployment!
4. Get a URL like: `https://your-site.netlify.app`

#### Vercel (FREE):
1. Go to [vercel.com](https://vercel.com)
2. Upload your files
3. Deploy in seconds!

#### Traditional Web Hosting:
- Upload all 3 files to your hosting via FTP or cPanel
- Place them in `public_html` or `www` folder

## ✏️ How to Customize

### Change Your Personal Information:

Open `script.js` and update the `projects` array with your projects.

Open `index.html` and change:
- Line 14: Your name in title
- Line 31: Your name in hero
- Line 32: Your title/subtitle
- Line 33: Your tagline
- Lines 183-202: Your work experience
- Lines 266-292: Your contact information

### Change Colors:

Open `styles.css` and edit the `:root` variables (lines 16-25):
```css
:root {
  --accent-green: #00ff41;  /* Change neon green */
  --accent-blue: #00d4ff;   /* Change cyber blue */
  --bg-primary: #0a0a0a;    /* Change background */
}
```

### Add More Projects:

Open `script.js` and add to the `projects` array (around line 70):
```javascript
{
    id: 6,
    title: 'Your Project Title',
    description: 'Project description here',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    impact: 'What impact it had'
}
```

### Add More Sections:

Copy any section from `index.html` and modify the content. Each section follows this structure:
```html
<section class="section" id="your-section">
    <div class="container">
        <div class="section-header">
            <span class="section-label">LABEL</span>
            <h2 class="section-title">Title</h2>
            <div class="title-underline"></div>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

## ✨ Features

- ✅ Matrix rain animation background
- ✅ Smooth scroll navigation
- ✅ Responsive mobile design
- ✅ 3D card hover effects
- ✅ Glowing text animations
- ✅ Contact form with validation
- ✅ Timeline for experience
- ✅ Dynamic project loading
- ✅ Professional footer

## 🎨 Design Elements

- **Fonts**: Orbitron (headings), Rajdhani (body), Share Tech Mono (code)
- **Colors**: Neon green (#00ff41), Cyber blue (#00d4ff), Dark theme
- **Effects**: Matrix rain, floating icons, glow effects, 3D transforms

## 📱 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 🐛 Troubleshooting

**Q: Styles not loading?**
A: Make sure all 3 files are in the same folder

**Q: Matrix animation not working?**
A: Check browser console for JavaScript errors

**Q: Mobile menu not opening?**
A: Clear browser cache and refresh

## 📄 License

Free to use and modify for your personal portfolio!

## 🤝 Support

Need help customizing? Check the code comments or:
- Open browser DevTools (F12) to inspect elements
- Modify and refresh to see changes instantly
- All code is well-commented for easy understanding

---

**Made with ❤️ and cybersecurity passion**
