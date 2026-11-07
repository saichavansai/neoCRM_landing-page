import { PRODUCT_NAME, PRICE } from "../config";

const links = [["How it works", "#demo"], ["Features", "#features"], ["Pricing", "#pricing"]];

export default function Navbar({ onBuy }) {
  return (
    <header className="sticky top-0 z-40 border-b border-violet-100/80 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-ink">
          {PRODUCT_NAME.slice(0, 3)}<span className="text-iris">{PRODUCT_NAME.slice(3)}</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-iris">{label}</a>
          ))}
        </nav>
        <button type="button" onClick={onBuy} className="rounded-full bg-iris px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(109,76,240,0.4)] transition hover:-translate-y-0.5 hover:bg-iris-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500">
          Buy {PRICE}
        </button>
      </div>
    </header>
  );
}
