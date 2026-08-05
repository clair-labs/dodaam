// Resolve a path in the public/ directory against Vite's base URL so images
// load correctly under GitHub Pages' /dodaam/ subpath (and '/' in dev).
export function asset(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`
}
