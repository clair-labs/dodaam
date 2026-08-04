import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatUSD } from '../data/products'
import ProductImage from '../components/ProductImage'

const FREE_SHIP = 50
const SHIP_FEE = 6

export default function Cart() {
  const { items, subtotal, setQty, remove, clear } = useCart()

  if (items.length === 0) {
    return (
      <div className="container-x py-28 text-center">
        <p className="text-5xl">🛒</p>
        <h1 className="mt-5 font-display text-2xl font-semibold text-ink">Your cart is empty</h1>
        <p className="mt-2 text-muted">Add a few of dodaam&apos;s well-made things.</p>
        <Link
          to="/shop"
          className="mt-7 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-clay"
        >
          Start shopping
        </Link>
      </div>
    )
  }

  const shipping = subtotal >= FREE_SHIP ? 0 : SHIP_FEE
  const remain = Math.max(0, FREE_SHIP - subtotal)
  const total = subtotal + shipping

  return (
    <div className="container-x pt-12">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow">Your bag</p>
          <h1 className="mt-2 font-display text-[2rem] font-semibold text-ink">Cart</h1>
        </div>
        <button onClick={clear} className="text-sm text-muted hover:text-clay">
          Clear all
        </button>
      </div>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_20rem]">
        {/* Items */}
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 py-6">
              <Link to={`/product/${item.id}`} className="shrink-0">
                <ProductImage product={item} className="h-28 w-24" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-3">
                  <Link
                    to={`/product/${item.id}`}
                    className="font-display font-medium text-ink hover:text-clay"
                  >
                    {item.name}
                  </Link>
                  <button
                    onClick={() => remove(item.id)}
                    className="text-sm text-muted hover:text-clay"
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </div>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-muted">
                  Ages {item.ages}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center rounded-full border border-line">
                    <button
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-ink hover:bg-sand"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-medium tabular-nums">{item.qty}</span>
                    <button
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-ink hover:bg-sand"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-display text-lg text-ink tabular-nums">
                    {formatUSD(item.price * item.qty)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <aside className="h-fit rounded-xl2 border border-line bg-white/50 p-7">
          <h2 className="font-display text-xl font-semibold text-ink">Order Summary</h2>

          {remain > 0 ? (
            <p className="mt-4 rounded-lg bg-sage/12 px-3.5 py-2.5 text-sm text-ink/80">
              Add {formatUSD(remain)} more for <b>free shipping</b>.
            </p>
          ) : (
            <p className="mt-4 rounded-lg bg-sage/12 px-3.5 py-2.5 text-sm text-ink/80">
              Free shipping applied 🎉
            </p>
          )}

          <dl className="mt-6 space-y-3.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="tabular-nums text-ink">{formatUSD(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Shipping</dt>
              <dd className="tabular-nums text-ink">
                {shipping === 0 ? 'Free' : formatUSD(shipping)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-line pt-3.5 text-base font-semibold">
              <dt className="text-ink">Total</dt>
              <dd className="tabular-nums text-clay">{formatUSD(total)}</dd>
            </div>
          </dl>

          <button
            onClick={() => alert('This is a portfolio demo — checkout is not connected.')}
            className="mt-7 w-full rounded-full bg-ink py-4 text-sm font-semibold text-cream transition-colors hover:bg-clay"
          >
            Checkout
          </button>
          <Link
            to="/shop"
            className="mt-3 block text-center text-sm text-muted hover:text-clay"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}
