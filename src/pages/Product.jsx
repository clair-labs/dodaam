import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products, categories, formatUSD } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductImage from '../components/ProductImage'
import ProductCard from '../components/ProductCard'

export default function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container-x py-28 text-center">
        <p className="text-lg text-ink">We couldn&apos;t find that product.</p>
        <Link to="/shop" className="mt-4 inline-block text-clay hover:underline">
          Back to shop →
        </Link>
      </div>
    )
  }

  const cat = categories.find((c) => c.id === product.category)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAdd = () => {
    add(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="container-x pt-8">
      {/* breadcrumb */}
      <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted">
        <Link to="/" className="hover:text-clay">Home</Link>
        <span aria-hidden="true" className="text-line">/</span>
        <Link to={`/shop?cat=${product.category}`} className="hover:text-clay">{cat?.label}</Link>
        <span aria-hidden="true" className="text-line">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <ProductImage product={product} className="aspect-[4/5] w-full" rounded="rounded-[2rem]" />

        <div className="flex flex-col lg:pt-4">
          {product.badge && (
            <span className="eyebrow text-clay">{product.badge}</span>
          )}
          <h1 className="mt-3 font-display text-[2rem] font-semibold leading-tight text-ink sm:text-[2.5rem]">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-muted">
            <span>★ {product.rating} ({product.reviews})</span>
            <span aria-hidden="true" className="text-line">·</span>
            <span>Ages {product.ages}</span>
          </div>
          <p className="mt-6 font-display text-3xl text-ink">{formatUSD(product.price)}</p>
          <p className="mt-6 leading-relaxed text-ink/75">{product.detail}</p>

          {/* Quantity */}
          <div className="mt-9 flex items-center gap-5">
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted">Quantity</span>
            <div className="flex items-center rounded-full border border-line">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-ink hover:bg-sand"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center font-medium tabular-nums">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-ink hover:bg-sand"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 flex gap-3">
            <button
              onClick={handleAdd}
              className="flex-1 rounded-full bg-ink py-4 text-sm font-semibold text-cream transition-colors hover:bg-clay"
            >
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
            <Link
              to="/cart"
              className="flex items-center justify-center rounded-full border border-ink/15 px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-clay hover:text-clay"
            >
              Buy Now
            </Link>
          </div>

          {/* Reassurance */}
          <ul className="mt-9 space-y-2.5 border-t border-line pt-7 text-sm text-muted">
            <li>🚚 Free shipping over $50 · order today, arrives tomorrow</li>
            <li>↩️ Free returns within 14 days, unopened</li>
            <li>🔒 Safety-certified</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <p className="eyebrow">You may also like</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Pairs well with</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
