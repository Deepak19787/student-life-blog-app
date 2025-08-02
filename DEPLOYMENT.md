# Deployment Guide

## 🚀 GitHub Pages Setup

Your project is now configured with automatic deployment to GitHub Pages. Here's how to complete the setup:

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/Deepak19787/student-life-blog-app
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the changes

### 2. Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your Angular application
- Deploy it to GitHub Pages
- Update the site whenever you push to the `master` branch

### 3. Access Your Live Site

Once the deployment is complete, your site will be available at:
`https://deepak19787.github.io/student-life-blog-app/`

## 🌐 Alternative Deployment Options

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `ng build`
3. Set publish directory: `dist/student-life/browser`
4. Deploy automatically on every push

### Vercel

1. Import your GitHub repository to Vercel
2. Vercel will automatically detect Angular
3. Deploy with zero configuration

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Set public directory: `dist/student-life/browser`
5. Deploy: `firebase deploy`

## 📝 Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
ng build --configuration production

# The built files will be in dist/student-life/browser/
# Upload these files to your hosting provider
```

## 🔧 Environment Variables

For production builds, you might want to set environment variables:

```bash
# Create environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://your-api-url.com'
};
```

## 📊 Performance Optimization

Your Angular app is already optimized with:
- Tree shaking
- Minification
- Gzip compression
- Lazy loading (if implemented)

## 🛠 Troubleshooting

### Build Issues
- Ensure Node.js version 18+ is installed
- Clear cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### Deployment Issues
- Check GitHub Actions logs for build errors
- Verify the build output path in the workflow
- Ensure repository permissions are set correctly

## 📞 Support

If you encounter any issues:
1. Check the GitHub Actions logs
2. Review the Angular build output
3. Verify your hosting provider's requirements

---

**Your StudentLife application is now ready for the world! 🌍** 