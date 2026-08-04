import { Link } from 'react-router-dom'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'

function Hero() {
  return (
    <section className="container-x pt-6">
      <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_1fr]">
        {/* copy */}
        <div className="flex flex-col justify-center rounded-[2.25rem] bg-sand px-8 py-16 sm:px-12 sm:py-20">
          <span className="eyebrow rise-in" style={{ animationDelay: '0.05s' }}>
            Organic · Certified Safe · All Seasons
          </span>
          <h1
            className="rise-in mt-6 font-display text-[2.75rem] font-semibold leading-[1.05] text-ink sm:text-[3.75rem]"
            style={{ animationDelay: '0.15s' }}
          >
            Well-made things<br />
            for <span className="display-italic text-clay">little ones</span>
          </h1>
          <p
            className="rise-in mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg"
            style={{ animationDelay: '0.25s' }}
          >
            Clothing, toys, and living essentials — chosen by a parent&apos;s eye
            and proven against a child&apos;s skin. A considered shop for the early years.
          </p>
          <div className="rise-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: '0.35s' }}>
            <Link
              to="/shop"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-clay"
            >
              Shop All
            </Link>
            <Link
              to="/shop?cat=clothing"
              className="rounded-full border border-ink/15 bg-cream px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-clay hover:text-clay"
            >
              New in Clothing
            </Link>
          </div>
        </div>
        {/* image */}
        <div
          className="rise-in relative min-h-[22rem] overflow-hidden rounded-[2.25rem]"
          style={{ animationDelay: '0.2s' }}
        >
          <img
            src="/products/hero-nursery.jpg"
            alt="A parent arranging baby clothes and wooden toys in a nursery"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

function CategoryStrip() {
  return (
    <section className="container-x mt-20">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((c, i) => (
          <Reveal key={c.id} delay={i * 80}>
            <Link
              to={`/shop?cat=${c.id}`}
              className="group flex h-full flex-col items-center gap-2.5 rounded-xl2 border border-line bg-white/80 px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:bg-white"
            >
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                {c.emoji}
              </span>
              <span className="font-display text-[15px] font-medium text-ink">{c.label}</span>
              <span className="text-xs text-muted">{c.blurb}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function EditorialBand() {
  return (
    <section className="container-x mt-24">
      <Reveal className="relative overflow-hidden rounded-[2.25rem]">
        <img
          src="/products/lifestyle-hands.jpg"
          alt="Two toddlers in red overalls holding hands outdoors"
          className="h-[26rem] w-full object-cover sm:h-[32rem]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 sm:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/80">
            The Autumn Edit
          </p>
          <h2 className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
            Made to be worn, and worn again
          </h2>
          <Link
            to="/shop?cat=clothing"
            className="mt-6 inline-block rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-clay hover:text-cream"
          >
            Shop the edit
          </Link>
        </div>
      </Reveal>
    </section>
  )
}

function FeaturedRow({ eyebrow, title, subtitle, items, to }) {
  return (
    <section className="container-x mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2 font-display text-[1.75rem] font-semibold text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mt-1.5 text-sm text-muted">{subtitle}</p>
        </div>
        <Link
          to={to}
          className="shrink-0 text-[13px] font-medium uppercase tracking-[0.12em] text-clay hover:underline"
        >
          View all →
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Promises() {
  const items = [
    { icon: '🌱', title: 'Organic first', text: 'GOTS-certified fabrics and non-toxic finishes, as a baseline.' },
    { icon: '🔍', title: 'Tested by parents', text: 'Only what our parent testers have used and passed.' },
    { icon: '🚚', title: 'Free shipping', text: 'Complimentary shipping on orders over $50.' },
  ]
  return (
    <section className="container-x mt-24">
      <div className="grid gap-6 rounded-[2.25rem] bg-sage/25 p-8 sm:grid-cols-3 sm:p-12">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} className="flex flex-col gap-1.5">
            <span className="text-2xl">{item.icon}</span>
            <p className="mt-1 font-display text-lg font-medium text-ink">{item.title}</p>
            <p className="text-sm leading-relaxed text-muted">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const best = products.filter((p) => p.badge === 'BEST').slice(0, 4)
  const bestIds = new Set(best.map((p) => p.id))
  // "New this week": NEW-badged first, then fill from the rest — never repeating a bestseller
  const fresh = [
    ...products.filter((p) => p.badge === 'NEW'),
    ...products.filter((p) => p.badge !== 'NEW'),
  ]
    .filter((p) => !bestIds.has(p.id))
    .slice(0, 4)

  return (
    <div>
      <Hero />
      <CategoryStrip />
      <FeaturedRow
        eyebrow="Most loved"
        title="Bestsellers"
        subtitle="The pieces parents reach for most"
        items={best}
        to="/shop"
      />
      <EditorialBand />
      <FeaturedRow
        eyebrow="Just in"
        title="New This Week"
        subtitle="Freshly arrived to the shop"
        items={fresh}
        to="/shop"
      />
      <Promises />
    </div>
  )
}
