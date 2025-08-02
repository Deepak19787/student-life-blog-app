# StudentLife - Angular Blog Application

A modern Angular application designed to help students navigate their academic journey with practical tips, advice, and resources for student life.

## 🎯 Project Overview

StudentLife is a comprehensive web application built with Angular 19 that provides students with valuable content about managing their academic and personal life. The application features a blog section with articles covering essential topics like study schedules, note-taking techniques, time management, stress relief, and avoiding procrastination.

## ✨ Features

### 📚 Educational Content
- **Study Schedule**: Tips for creating effective study routines
- **Note Taking**: Techniques for better note-taking and information retention
- **Time Management**: Strategies for balancing academics and personal life
- **Stress Relief**: Methods for managing academic stress and anxiety
- **Avoiding Procrastination**: Practical advice for staying motivated and productive

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Navigation**: Easy-to-use navigation with navbar and footer components
- **SEO Optimized**: Built with search engine optimization best practices
- **Fast Loading**: Optimized for performance and quick page loads

### 🛠 Technical Features
- **Angular 19**: Latest version with modern development practices
- **TypeScript**: Type-safe development environment
- **Routing**: Client-side routing for smooth navigation
- **Component Architecture**: Modular, reusable components
- **Testing Ready**: Jasmine/Karma testing framework included

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/student-life.git
   cd student-life
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/` to view the application.

## 📁 Project Structure

```
student-life/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Navigation component
│   │   │   └── footer/          # Footer component
│   │   ├── pages/
│   │   │   ├── home/            # Home page
│   │   │   ├── about/           # About page
│   │   │   ├── contact/         # Contact page
│   │   │   └── blog/            # Blog articles
│   │   ├── app.component.*      # Main app component
│   │   ├── app.routes.ts        # Routing configuration
│   │   └── app.config.ts        # App configuration
│   ├── assets/                  # Static assets
│   └── styles.css               # Global styles
├── public/                      # Public assets
├── angular.json                 # Angular CLI configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🧪 Testing

### Unit Tests
```bash
ng test
```

### End-to-End Tests
```bash
ng e2e
```

## 🏗 Building for Production

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

### GitHub Pages
1. Build the project: `ng build --configuration production`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to `/docs` or deploy branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `ng build`
3. Set publish directory: `dist/student-life/browser`

### Vercel
1. Import your GitHub repository to Vercel
2. Vercel will automatically detect Angular and configure the build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Deepak Sharma**
- Email: deepaksharma197821@gmail.com
- GitHub: [@deepaksharma](https://github.com/deepaksharma)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- The student community for inspiration and feedback
- All contributors who help improve this project

---

**Made with ❤️ for students everywhere**
