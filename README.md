# React Molla - Vite Migration

This project has been migrated from Create React App (React 16) to Vite (React 19).

## Migration Changes

### Key Updates
- **React**: Upgraded from 16.14.0 to 19.1.0
- **Build Tool**: Migrated from Webpack to Vite
- **jQuery Setup**: Configured to work globally with owl.carousel
- **Router**: Updated to React Router v6

### Fixed Issues
1. **jQuery/Owl Carousel**: Properly configured jQuery as a global variable for owl.carousel compatibility
2. **Vite Config**: Added custom configuration for jQuery and build optimization
3. **Component Updates**: Fixed owl-carousel.jsx to import jQuery correctly
4. **Base URL Fix**: Fixed image loading issue where paths were resolving to `http://assets/...` instead of `http://localhost:5174/assets/...`
   - Changed `VITE_PUBLIC_URL` from `/` to empty string in `.env`
   - Added `base: '/'` to `vite.config.js`
   - See `BASE_URL_FIX.md` for detailed explanation
5. **HTML Template**: Replaced default Vite HTML with complete production template
   - Restored all Google Analytics, Facebook Pixel, and tracking scripts
   - Restored all custom CSS styles (300+ lines)
   - Added missing DOM elements (mobile-menu-overlay, scroll-top button)
   - Included all SEO meta tags and favicons
   - See `HTML_FIX.md` for detailed explanation

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The dev server will start on `http://localhost:5173` (or next available port)

## Production Build

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Known Warnings

### Build Warnings (Non-Critical)
- **SASS Deprecation**: Old SASS syntax warnings - doesn't affect functionality
- **Duplicate Keys**: Some duplicate CSS properties in search-bar.jsx
- **Large Chunks**: Main bundle is large - consider code splitting for optimization
- **eval() Usage**: react-owl-carousel2 uses eval - acceptable for this use case

## Project Structure

```
vite-web/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── actions/     # Redux actions
│   ├── reducers/    # Redux reducers
│   ├── services/    # API services
│   ├── utils/       # Utility functions
│   └── index.jsx    # Entry point
├── dist/            # Production build
└── vite.config.js   # Vite configuration
```

## Technologies

- **React 19.1.0**
- **Vite 6.3.5**
- **Redux** for state management
- **React Router v6** for routing
- **jQuery** for legacy carousel support
- **Owl Carousel** for image galleries
- **Material-UI** for components
- **SASS** for styling

## Environment Variables

Create a `.env` file in the root directory for environment-specific configurations.

## Browser Support

Supports modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
