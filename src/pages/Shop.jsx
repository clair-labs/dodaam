import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'

const SORTS = [
  { id: 'popular', label: 'Most popular' },
  { id: 'priceLow', label: 'Price: low to high' },
  { id: 'priceHigh', label: 'Price: high to low' },
  { id: 'rating', label: 'Top rated' },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const activeCat = params.get('cat') || 'all'
  const [sort, setSort] = useState('popular')

  const setCat = (cat) => {
    if (cat === 'all') {
      params.delete('cat')
    } else {
      params.set('cat', cat)
    }
    setParams(params, { replace: true })
  }

  const list = useMemo(() => {
    let out = products.filter((p) => activeCat === 'all' || p.category === activeCat)
    switch (sort) {
      case 'priceLow':
        out = [...out].sort((a, b) => a.price - b.price)
        break
      case 'priceHigh':
        out = [...out].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        out = [...out].sort((a, b) => b.rating - a.rating)
        break
      default:
        out = [...out].sort((a, b) => b.reviews - a.reviews)
    }
    return out
  }, [activeCat, sort])

  const catLabel =
    activeCat === 'all' ? 'Shop All' : categories.find((c) => c.id === activeCat)?.label

  return (
    <div className="container-x pt-12">
      <div className="flex flex-col gap-1.5">
        <p className="eyebrow">The Shop</p>
        <h1 className="font-display text-[2rem] font-semibold text-ink sm:text-4xl">{catLabel}</h1>
        <p className="text-sm text-muted">{list.length} products</p>
      </div>

      {/* Category filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        <FilterChip active={activeCat === 'all'} onClick={() => setCat('all')}>
          All
        </FilterChip>
        {categories.map((c) => (
          <FilterChip key={c.id} active={activeCat === c.id} onClick={() => setCat(c.id)}>
            {c.emoji} {c.label}
          </FilterChip>
        ))}
      </div>

      {/* Sort */}
      <div className="mt-5 flex items-center justify-end gap-2.5 border-b border-line pb-5">
        <label htmlFor="sort" className="text-[11px] uppercase tracking-[0.14em] text-muted">
          Sort
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-full border border-line bg-cream px-4 py-2 text-sm outline-none transition-colors focus:border-clay"
        >
          {SORTS.map((s) => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {list.length === 0 && (
        <p className="py-24 text-center text-muted">Nothing in this category yet.</p>
      )}
    </div>
  )
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        active
          ? 'border-ink bg-ink text-cream'
          : 'border-line bg-white/40 text-ink hover:border-clay hover:text-clay'
      }`}
    >
      {children}
    </button>
  )
}
