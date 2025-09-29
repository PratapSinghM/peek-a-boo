# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🎉 Peeka Boo Events - React Vite MUI Project

A modern, responsive event management website built with React, Vite, and Material-UI (MUI). This project showcases Peeka Boo Events, a family-run Indian events company specializing in birthday parties, weddings, anniversaries, and other celebrations.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development and optimal performance
- **Material-UI Components**: Beautiful, accessible UI components with custom theming
- **Responsive Design**: Fully responsive layout that works on all devices
- **Multiple Themes**: 6 different color themes (Pink, Blue, Purple, Green, Orange, Yellow)
- **Shopping Basket**: Add services to basket and generate WhatsApp orders
- **Image Gallery**: Interactive image and video gallery with full-screen viewer
- **Package Management**: Detailed decoration, DJ, and game stall packages
- **Smooth Animations**: Beautiful transitions and animations using Emotion
- **Modern Routing**: Client-side routing with React Router

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v5
- **Styling**: Emotion (CSS-in-JS)
- **Routing**: React Router v6
- **Icons**: Material Icons
- **Fonts**: Google Fonts (Poppins)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd peeka-boo-events
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Navigation and Footer
│   ├── Packages/        # Package display components
│   ├── Basket/          # Shopping basket components
│   └── UI/              # Common UI components
├── context/             # React Context providers
│   ├── ThemeContext.jsx # Theme management
│   └── BasketContext.jsx# Shopping basket state
├── pages/               # Route components
│   ├── Home.jsx
│   ├── Events.jsx
│   ├── BirthdayDetails.jsx
│   ├── Artists.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## 🎨 Theme System

The application features a dynamic theming system with 6 pre-built themes:

- **Pink** (Default): Pink Paradise theme for girl celebrations
- **Blue**: Ocean Blue theme for boy celebrations  
- **Purple**: Royal Purple theme for weddings
- **Green**: Nature Green theme for corporate events
- **Orange**: Sunset Orange theme for get-togethers
- **Yellow**: Sunshine Yellow theme for bright celebrations

Themes can be switched using the floating theme selector in the top-right corner.

## 🛒 Basket System

- Add services and packages to shopping basket
- Manage quantities and remove items
- Generate WhatsApp message with order details
- Persistent basket state across navigation

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 600px
- **Tablet**: 600px - 960px  
- **Desktop**: > 960px

Custom responsive design ensures optimal viewing on all devices.

## 🎯 Key Components

### Context Providers
- **ThemeContext**: Manages theme switching and color schemes
- **BasketContext**: Handles shopping basket state and operations

### Layout Components
- **Navbar**: Responsive navigation with mobile drawer
- **Footer**: Consistent footer across all pages
- **ThemeSelector**: Floating theme switcher

### Page Components
- **Home**: Hero section and company introduction
- **Events**: Overview of event services
- **BirthdayDetails**: Detailed birthday services with packages
- **Artists**: Team of performers and entertainers
- **Gallery**: Image and video showcase
- **Contact**: Contact information and methods

### Package Components
- **PackageModal**: Modal container for package displays
- **DecorationPackages**: Decoration service packages
- **DJPackages**: DJ and sound system packages  
- **GamePackages**: Interactive game stall options

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- Uses ESLint for code linting
- Follows React best practices
- Material-UI styling patterns
- Responsive design principles

## 🌟 Features in Detail

### Theme System
- 6 unique color schemes
- Smooth theme transitions
- Persistent theme selection
- Custom Material-UI theme integration

### Basket Functionality
- Add/remove items
- Quantity management
- WhatsApp integration
- Order summary generation

### Gallery System
- Image and video support
- Full-screen viewer
- Responsive grid layout
- Smooth animations

### Package Management
- Detailed service packages
- Image galleries for packages
- Interactive selection
- Pricing information

## 📞 Contact Integration

- **Phone**: Direct calling functionality
- **WhatsApp**: Pre-filled message integration
- **Email**: Mailto links with subject lines

## 🚀 Deployment

The project is configured for easy deployment on modern hosting platforms:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

Popular deployment options:
- Vercel
- Netlify  
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to Peeka Boo Events.

## 🎉 About Peeka Boo Events

Peeka Boo Events is a passionate, family-run Indian events company founded by Ajit. We specialize in creating magical moments for:

- 🎂 Birthday Parties
- 👰 Weddings  
- 💕 Anniversaries
- 🤝 Get-togethers
- 🎪 Corporate Events

**Contact Us:**
- 📱 Phone: +91 98211 48631
- 💬 WhatsApp: +91 98211 48631
- ✉️ Email: hello@peekabooevents.com

---

Built with ❤️ by the Peeka Boo Events team