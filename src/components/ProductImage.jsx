import { categories } from '../data/products'

// Uses a real product photo when `product.image` is set; otherwise falls back to
// a refined tonal placeholder in the brand palette (cohesive without image assets).
export default function ProductImage({ product, className = '', rounded = 'rounded-xl2' }) {
  const cat = categories.find((c) => c.id === product.category)

  if (product.image) {
    return (
      <div className={`overflow-hidden ${rounded} ${className}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${rounded} ${className}`}
      style={{ backgroundColor: product.color }}
      aria-hidden="true"
    >
      <div
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-xl"
        style={{ backgroundColor: product.accent }}
      />
      <div
        className="absolute -bottom-12 -left-6 h-28 w-28 rounded-full opacity-20 blur-lg"
        style={{ backgroundColor: product.accent }}
      />
      <div className="absolute inset-3 rounded-[inherit] border border-white/25" />
      <span className="relative select-none text-4xl opacity-90 sm:text-5xl">
        {cat?.emoji}
      </span>
    </div>
  )
}
