import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { categories } from '../data/products'
import ScallopHem from './ScallopHem'

function Header() {
  const { count } = useCart()
  return (
    <header className="sticky top-0 z-40 bg-cream">
      <ScallopHem />
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          className="font-display text-[26px] font-semibold tracking-tight text-ink"
        >
          dodaam<span className="text-clay">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.12em] text-ink/70 md:flex">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `transition-colors hover:text-clay ${isActive ? 'text-clay' : ''}`
            }
          >
            Shop All
          </NavLink>
          {categories.slice(0, 4).map((c) => (
            <NavLink
              key={c.id}
              to={`/shop?cat=${c.id}`}
              className="transition-colors hover:text-clay"
            >
              {c.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/cart"
          className="relative rounded-full px-3.5 py-1.5 text-[13px] font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:bg-sand"
        >
          Cart
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-clay px-1 text-[11px] font-bold text-cream">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-28 border-t border-line bg-sand/40">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold text-ink">
            dodaam<span className="text-clay">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Well-made things for little ones — chosen for organic materials and
            safe, considered finishing, first.
          </p>
        </div>
        <div>
          <p className="eyebrow">Shop</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/shop?cat=${c.id}`} className="hover:text-clay">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Support</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>Shipping &amp; Returns</li>
            <li>Size Guide</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Newsletter</p>
          <p className="mt-4 text-sm text-muted">
            New arrivals and quiet sales, first.
          </p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-line bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-clay"
            />
            <button className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-clay">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="container-x flex flex-col items-center justify-between gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row">
        <p>© 2026 dodaam — portfolio demo, not a live store.</p>
        <p className="uppercase tracking-[0.14em]">Design &amp; Build — Frontend Portfolio</p>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
