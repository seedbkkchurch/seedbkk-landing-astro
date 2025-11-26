# Welcome Page with Video Upload 🎥

React-based welcome page with background video upload functionality for The Seed Of Bangkok City Church.

## ✨ Features

- 🎥 **Full-screen background video** - Auto-playing looped video
- 📤 **Video upload button** - Upload custom background videos
- 💾 **localStorage persistence** - Uploaded videos saved and restored
- 📱 **Fully responsive** - Desktop, tablet, and mobile optimized
- 🎨 **Beautiful design** - Purple gradient button with glow effects
- 🔝 **Always visible** - Button with z-index 99999
- ✨ **Smooth animations** - Hover effects and transitions

## 🚀 Usage

### Access the Page
Visit `/welcome2` in your browser:
```
http://localhost:4321/welcome2
```

### Upload a Video
1. Click the **purple "Upload Video"** button in the **bottom-right corner**
2. Select a video file (MP4, WebM, etc.)
3. The video replaces the background immediately
4. Refresh the page - your video persists!

## 📁 File Structure

```
src/
├── components/
│   └── welcome/
│       ├── WelcomeWithUpload.tsx    # React component
│       ├── WelcomeWithUpload.css    # Styles
│       └── README.md                # This file
└── pages/
    ├── welcome.astro                # Original page
    └── welcome2.astro               # New React page ⭐
```

## 🎨 Styling Features

### Text
- **Thai title**: Responsive from 3rem to 9rem
- **English subtitle**: Responsive from 2rem to 4.5rem
- **Strong text shadows** for readability
- **Backdrop blur** on content container

### Upload Button
- **Position**: Fixed bottom-right (2rem from edges)
- **z-index**: 99999 (always on top)
- **Colors**: Purple gradient (#667eea → #764ba2)
- **Border**: 3px white with transparency
- **Glow**: Multiple shadow layers
- **Mobile**: Icon-only on small screens

## 🔧 Technical Details

### Technologies
- **React 19** with TypeScript
- **Astro** integration (`client:load`)
- **CSS** for styling (not CSS Modules)
- **localStorage API** for persistence
- **FileReader API** for video upload
- **Object URLs** for instant preview

### Browser Support
- Modern browsers with video support
- localStorage required for persistence
- File API required for upload

## 📱 Responsive Breakpoints

| Screen Size | Thai Title | English Title | Button |
|------------|-----------|---------------|---------|
| Mobile (<640px) | 3rem | 2rem | Icon only |
| Tablet (768px+) | 7rem | 3.5rem | Icon + Text |
| Desktop (1024px+) | 9rem | 4.5rem | Icon + Text |

## 🎯 Button Position

The upload button is **always visible** with:
- Bottom: 2rem (32px)
- Right: 2rem (32px)
- Z-index: 99999
- High contrast gradient
- White border for visibility
- Multiple shadow layers for glow

## 💡 Tips

- Use MP4 format for best compatibility
- Large videos may not save to localStorage
- Button glows on hover for better visibility
- Video auto-plays on upload
- Original video restored on localStorage clear

## 🔄 Comparison with Original

| Feature | `/welcome` | `/welcome2` |
|---------|-----------|-------------|
| Technology | Vanilla JS | React |
| Video Upload | ❌ | ✅ |
| localStorage | ❌ | ✅ |
| Framework | Astro | Astro + React |
| Styling | Inline | External CSS |

---

**Made with ❤️ for The Seed Of Bangkok City Church**
