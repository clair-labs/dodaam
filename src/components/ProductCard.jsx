import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'
import { formatUSD } from '../data/products'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-xl2">
        <ProductImage
          product={product}
          className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col pt-3.5">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>{product.ages}</span>
          <span aria-hidden="true" className="text-line">·</span>
          <span>★ {product.rating}</span>
        </div>
        <h3 className="mt-1.5 font-display text-[17px] font-medium leading-snug text-ink">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-muted">{product.blurb}</p>
        <p className="mt-2.5 text-[15px] font-medium tabular-nums text-ink">
          {formatUSD(product.price)}
        </p>
      </div>
    </Link>
  )
}
