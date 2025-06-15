# WhatsApp Liquid Glass UI

A stunning web interface showcasing WhatsApp components with customizable liquid glass effects, inspired by Apple's Liquid Glass design language announced for iOS 26.

![WhatsApp Liquid Glass Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=WhatsApp+Liquid+Glass+UI)

## ✨ Features

### 🎨 **Liquid Glass Technology**
- **Real-time Customization**: Adjust opacity, blur, saturation, brightness, and more
- **Dynamic Adaptation**: Automatic light/dark theme responses
- **Specular Highlights**: Realistic light reflections and shine effects
- **Liquid Animation**: Smooth flowing animations with hue rotation
- **Advanced Filtering**: Multi-layer backdrop filters with custom CSS properties

### 📱 **WhatsApp Components**
- **Chat Bubbles**: Sent/received messages with authentic WhatsApp styling
- **Contact Cards**: User profile cards with status indicators
- **Status Updates**: WhatsApp Status interface with recent updates
- **Voice Messages**: Interactive voice message player with waveform

### 🛠 **Customization Panel**
- **Appearance Controls**: Opacity, blur intensity, border radius, colors
- **Effect Settings**: Specular highlights, liquid animations, theme adaptation
- **Advanced Options**: Glass thickness, shadow opacity, shimmer intensity
- **Preset System**: Quick-apply presets (Minimal, Vibrant, Crystalline, Flowing)
- **Export/Import**: Save and share your configurations

### 🖼 **Background System**
- **Preset Backgrounds**: Curated collection of stunning images
- **Custom Upload**: Upload your own background images
- **Dynamic Gradients**: Built-in gradient options
- **Real-time Preview**: Instant background switching

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/whatsapp-liquid-glass.git
   cd whatsapp-liquid-glass
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗 Tech Stack

### **Frontend**
- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful icon library

### **Backend**
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **EJS** - Embedded JavaScript templating

### **Styling & Effects**
- **CSS Backdrop Filter** - Native glass effects
- **Custom CSS Properties** - Dynamic theming
- **Tailwind Animations** - Smooth transitions
- **Advanced Gradients** - Multi-layer effects

## 📖 Usage Guide

### Basic Customization

1. **Select Preview Mode**: Switch between Chat Bubbles, Contact Card, or Status
2. **Choose Background**: Pick from presets or upload your own
3. **Adjust Glass Properties**: Use the right panel to customize effects
4. **Real-time Preview**: See changes instantly on the left

### Advanced Configuration

#### Glass Properties
```javascript
{
  opacity: 0.15,          // Glass transparency (0-1)
  blur: 20,               // Backdrop blur intensity (px)
  saturation: 180,        // Color saturation (%)
  brightness: 110,        // Brightness adjustment (%)
  contrast: 100,          // Contrast level (%)
  hueRotate: 0,           // Hue rotation (degrees)
  borderOpacity: 0.3,     // Border transparency
  shadowOpacity: 0.1,     // Shadow intensity
  borderRadius: 16,       // Corner roundness (px)
  specularHighlight: true,// Enable shine effects
  liquidAnimation: true,  // Enable flowing animation
  themeAdaptation: true   // Auto light/dark adaptation
}
```

#### Presets
- **Minimal**: Subtle, clean glass effect
- **Vibrant**: High saturation with animations
- **Crystalline**: Sharp, crystal-like appearance
- **Flowing**: Dynamic with liquid animations

### Export & Import

1. **Export Configuration**: Click "Export" to download JSON
2. **Share Settings**: Send configuration files to others
3. **Import Settings**: Load saved configurations

## 🎨 Customizable Properties

### **Appearance**
| Property | Range | Description |
|----------|-------|-------------|
| Opacity | 0-1 | Glass transparency level |
| Blur | 0-50px | Backdrop blur intensity |
| Border Radius | 0-40px | Corner roundness |
| Border Opacity | 0-1 | Border visibility |

### **Color Effects**
| Property | Range | Description |
|----------|-------|-------------|
| Saturation | 0-300% | Color intensity |
| Brightness | 50-200% | Light/dark adjustment |
| Contrast | 50-200% | Color contrast |
| Hue Rotate | 0-360° | Color shift |

### **Advanced Effects**
| Property | Type | Description |
|----------|------|-------------|
| Specular Highlights | Boolean | Realistic light reflections |
| Liquid Animation | Boolean | Flowing motion effects |
| Theme Adaptation | Boolean | Auto light/dark switching |
| Shimmer Intensity | 0-0.5 | Shine animation strength |

## 🌟 Apple Liquid Glass Features

Based on Apple's iOS 26 announcement, our implementation includes:

- **Translucent Materials**: Dynamic transparency that adapts to content
- **Real-time Rendering**: Smooth 60fps animations and effects
- **Intelligent Adaptation**: Automatic theme and color adjustments
- **Specular Highlights**: Realistic light behavior and reflections
- **Multi-layer Effects**: Complex backdrop filtering system

## 📁 Project Structure

```
whatsapp-liquid-glass/
├── src/
│   ├── components/
│   │   ├── WhatsAppChat.jsx      # Main chat component
│   │   ├── CustomizationPanel.jsx # Controls panel
│   │   ├── BackgroundSelector.jsx # Background chooser
│   │   └── Header.jsx            # App header
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── views/
│   └── index.ejs                 # EJS template
├── public/                       # Static assets
├── server.js                     # Express server
├── package.json                  # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
└── README.md                    # Documentation
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Environment Variables
```env
NODE_ENV=production
PORT=3000
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Apple** - For the revolutionary Liquid Glass design language
- **WhatsApp** - For the iconic UI components and design system
- **React Team** - For the amazing React library
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animation capabilities

## 📞 Support

- 📧 Email: support@whatsapp-liquid-glass.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/whatsapp-liquid-glass/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/whatsapp-liquid-glass/discussions)

---

**Built with ❤️ and inspired by Apple's Liquid Glass technology** 