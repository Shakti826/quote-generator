# Quote.Io - Generate & Edit Beautiful Quotes

![Quote.Io Banner](https://img.shields.io/badge/Quote.Io-Generate%20%26%20Edit%20Quotes-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A modern, responsive web application that helps users generate inspirational quotes and customize them with extensive styling options. Create beautiful quote images with custom backgrounds, fonts, and colors.

## 🌟 Live Demo

[**Try Quote.Io Now**](https://shakti826.github.io/quote-io) 🚀

## ✨ Features

### 🎯 Quote Generation
- **Random Quote Generator** with 6 categories
- **50+ Curated Quotes** from famous personalities
- **Categories**: Inspirational, Motivational, Success, Life, Wisdom, Love
- **Smart Category Selection** with instant generation

### ✏️ Quote Editing & Customization
- **Custom Quote Input** with real-time preview
- **23+ Font Options** organized by category:
  - Sans Serif (Inter, Roboto, Open Sans, Lato, Montserrat, Poppins, etc.)
  - Serif (Playfair Display, Merriweather, Georgia, Times New Roman)
  - Handwriting & Script (Dancing Script, Pacifico, Lobster, Great Vibes, etc.)
- **Dynamic Font Sizing** (16px - 48px)
- **Color Customization** for text and background
- **Text Alignment** options (left, center, right)
- **Background Image Upload** with overlay effects

### 🎨 Advanced Styling
- **Custom Background Images** - Upload your own photos
- **Color Overlay Effects** for better text readability
- **Live Preview** of all changes
- **Font Preview** in dropdown selector
- **Responsive Design** for all devices

### 📤 Export & Share
- **High-Quality PNG Export** (800x600px) with background images
- **Text Shadow Effects** for image exports
- **Copy to Clipboard** functionality
- **Native Device Sharing** when available
- **Canvas-based Rendering** for perfect quality

### 🚀 User Experience
- **Keyboard Shortcuts**:
  - `Ctrl/Cmd + G`: Generate new quote
  - `Ctrl/Cmd + Shift + C`: Copy quote
  - `Ctrl/Cmd + Shift + S`: Download as image
  - `Enter`: Apply custom quote
- **Auto-save Preferences** including background images
- **Smooth Animations** and loading states
- **Mobile-First Design** with touch-friendly controls

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Quote.Io.git
   cd Quote.Io
   ```

2. **Open in browser**:
   ```bash
   # Simply open index.html in any modern web browser
   open index.html  # macOS
   start index.html # Windows
   ```

3. **Start creating quotes!**
   - No installation required
   - No dependencies needed
   - Works offline

## 📁 Project Structure

```
Quote.Io/
├── 📄 index.html          # Main HTML structure
├── 🎨 styles.css          # CSS styling and animations
├── ⚡ script.js           # JavaScript functionality
├── 📖 README.md           # Project documentation
└── 🚫 .gitignore          # Git ignore rules
```

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Google Fonts API (23+ font families)
- **Icons**: Font Awesome 6
- **Storage**: LocalStorage for preferences
- **Export**: HTML5 Canvas API
- **Responsive**: CSS Grid & Flexbox

## 🎨 Font Categories

### Sans Serif (Modern & Clean)
- Inter, Roboto, Open Sans, Lato, Montserrat, Poppins, Source Sans Pro, Raleway, Nunito, Oswald, Comfortaa, Arial

### Serif (Classic & Elegant)
- Playfair Display, Merriweather, Georgia, Times New Roman

### Handwriting & Script (Artistic & Personal)
- Dancing Script, Pacifico, Lobster, Great Vibes, Satisfy, Caveat, Kalam

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| Mobile  | ✅ Responsive |

## 🔧 Development

### Adding New Quotes
```javascript
// In script.js, extend the quotes object
quotes.newCategory = [
    { text: "Your quote here", author: "Author Name" }
];
```

### Adding New Fonts
1. Add font to Google Fonts link in `index.html`
2. Add option to font selector
3. Add CSS preview rule

### Customizing Colors
```css
/* Update CSS custom properties in styles.css */
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --accent-color: #667eea;
}
```

## 📱 Screenshots

| Desktop View | Mobile View | Font Selection |
|--------------|-------------|----------------|
| ![Desktop](https://via.placeholder.com/300x200?text=Desktop+View) | ![Mobile](https://via.placeholder.com/300x200?text=Mobile+View) | ![Fonts](https://via.placeholder.com/300x200?text=Font+Selection) |

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Fonts** for the beautiful typography
- **Font Awesome** for the icons
- **Quote Authors** for their inspiring words
- **Open Source Community** for inspiration and tools

## 📞 Contact

- **GitHub**: [@Shakti826](https://github.com/Shakti826)
- **Repository**: [quote-io](https://github.com/Shakti826/quote-io)
- **Live Demo**: [shakti826.github.io/quote-io](https://shakti826.github.io/quote-io)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Shakti826](https://github.com/Shakti826)

</div>