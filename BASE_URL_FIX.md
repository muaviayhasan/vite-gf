# Base URL Fix - Image Loading Issue

## Problem

Images were loading with incorrect URLs like:
```
http://assets/images/houze1.png
```

Instead of:
```
http://localhost:5174/assets/images/houze1.png
```

## Root Cause

When `VITE_PUBLIC_URL=/` is set in `.env` and used in code like:
```javascript
src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/houze1.png`}
```

It creates a **double slash** (`//assets/images/...`), which browsers interpret as a **protocol-relative URL**. This means the browser tries to use the current protocol (http or https) with `assets` as the hostname, resulting in `http://assets/images/...`.

## Solution Applied

### 1. Updated `.env` File ✅

**Before:**
```env
VITE_PUBLIC_URL=/
```

**After:**
```env
VITE_PUBLIC_URL=
```

**Why:** An empty string prevents the double slash issue. When concatenated with `/assets/...`, it produces the correct path `/assets/...`.

### 2. Added Base Configuration to `vite.config.js` ✅

```javascript
export default defineConfig({
  base: '/',  // Added this line
  plugins: [react()],
  // ... rest of config
})
```

**Why:** This tells Vite to serve assets from the root path `/` in both development and production.

## How It Works Now

### Development (npm run dev)
- Assets are served from: `http://localhost:5174/assets/...`
- Images load correctly with absolute paths: `/assets/images/houze1.png`

### Production (npm run build)
- Assets are bundled and served from: `https://yourdomain.com/assets/...`
- All paths remain consistent

## Image Path Patterns

### ✅ Correct Patterns

1. **Using VITE_PUBLIC_URL (now empty):**
   ```javascript
   src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/logo.png`}
   // Results in: /assets/images/logo.png
   ```

2. **Direct absolute path:**
   ```javascript
   src="/assets/images/logo.png"
   // Results in: /assets/images/logo.png
   ```

3. **Using template literals:**
   ```javascript
   const imgPath = `/assets/images/${filename}`;
   // Results in: /assets/images/filename.png
   ```

### ❌ Incorrect Patterns (Avoid)

1. **Double slash:**
   ```javascript
   src="//assets/images/logo.png"  // ❌ Protocol-relative URL
   ```

2. **Missing leading slash:**
   ```javascript
   src="assets/images/logo.png"  // ❌ Relative to current route
   ```

3. **Using VITE_PUBLIC_URL with value "/":**
   ```javascript
   // When VITE_PUBLIC_URL="/"
   src={`${import.meta.env.VITE_PUBLIC_URL}/assets/...`}
   // Results in: //assets/... ❌
   ```

## Router Configuration

The React Router is configured to use the base URL:

```javascript
<Router basename={import.meta.env.VITE_BASE_URL || '/'}>
```

This ensures all routes work correctly with the base path.

## Files Modified

1. **`.env`** - Changed `VITE_PUBLIC_URL` from `/` to empty string
2. **`vite.config.js`** - Added `base: '/'` configuration

## Testing Checklist

- [x] Dev server restarts successfully
- [ ] Images load correctly (check browser console for 404s)
- [ ] Navigation works without redirecting to wrong URLs
- [ ] All routes are accessible
- [ ] Production build works (`npm run build`)

## Environment Variables Reference

```env
# Development
VITE_NODE_ENV=development
VITE_BABEL_ENV=development
VITE_PUBLIC_URL=              # Empty for correct path resolution
VITE_API_URL=https://api.glassfusionltd.co.uk
VITE_GENERATE_SOURCEMAP=true
VITE_INLINE_RUNTIME_CHUNK=false
VITE_HTTPS=false
VITE_HOST=localhost
VITE_PORT=3000
```

## Production Deployment Notes

When deploying to production:

1. **If deploying to root domain** (e.g., `https://example.com/`):
   - Keep `base: '/'` in `vite.config.js`
   - Keep `VITE_PUBLIC_URL=` empty

2. **If deploying to subdirectory** (e.g., `https://example.com/app/`):
   - Change `base: '/app/'` in `vite.config.js`
   - Keep `VITE_PUBLIC_URL=` empty
   - Update router: `basename="/app"`

## Troubleshooting

### Images still not loading?

1. **Clear browser cache:** `Ctrl + Shift + R` (hard refresh)
2. **Check file exists:** Verify file is in `public/assets/images/`
3. **Check console:** Look for 404 errors with full URL
4. **Restart dev server:** Stop and run `npm run dev` again

### Routes redirecting incorrectly?

1. **Check router basename:** Should match `vite.config.js` base
2. **Use Link component:** Always use `<Link to="/path">` not `<a href="/path">`
3. **Check .env file:** Ensure `VITE_PUBLIC_URL` is empty

## Additional Resources

- [Vite Config Reference](https://vitejs.dev/config/)
- [React Router Basename](https://reactrouter.com/en/main/router-components/browser-router#basename)
- [Public Base Path](https://vitejs.dev/guide/build.html#public-base-path)
