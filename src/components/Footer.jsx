import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { PRICE, PRICE_NOTE, PRODUCT_NAME } from "../config";

const COLUMNS = [
  {
    title: "Product",
    links: [
      ["Lead workspace", "#features"],
      ["Sales pipeline", "#features"],
      ["Dashboards & reports", "#features"],
      ["Mobile companion", "#capabilities"],
    ],
  },
  {
    title: "Discover",
    links: [
      ["How it works", "#demo"],
      ["Capabilities", "#capabilities"],
      ["Pricing", "#pricing"],
      ["See the demo", "#demo"],
    ],
  },
  {
    title: "Good to know",
    links: [
      ["Terms of use", "#terms"],
      ["Privacy policy", "#privacy"],
      ["Refund policy", "#refund-policy"],
    ],
  },
];

const linkClass =
  "group inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors duration-200 hover:text-ink focus-visible:text-ink focus-visible:outline-none";

export default function Footer() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);
  const wordmark = useMotionTemplate`radial-gradient(300px circle at ${x}px ${y}px, #ffffff 0%, #dffbff 25%, rgba(34,211,238,0) 72%), linear-gradient(110deg, #6d4cf0 2%, #4b6df5 42%, #21b9dc 82%)`;

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };
  const onLeave = () => {
    x.set(-999);
    y.set(-999);
  };

  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[30px] border border-white/80 bg-white/85 shadow-[0_24px_80px_rgba(64,75,130,0.10)] backdrop-blur-xl sm:rounded-[40px]">
        {/* A soft halo ties the footer back to the page's violet and cyan palette. */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-cyan-200/35 blur-[100px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-36 h-72 w-72 rounded-full bg-violet-200/35 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-7 pt-7 sm:px-10 sm:pb-9 sm:pt-10 lg:px-12">
          {/* A compact closing moment gives the page one clear next step. */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-gradient-to-br from-[#f7f7ff] via-[#f4fbff] to-[#edfaff] px-6 py-8 sm:px-9 sm:py-9">
            <div aria-hidden="true" className="pointer-events-none absolute -right-7 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-violet-300/50 to-cyan-200/20 blur-2xl" />
            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-iris/10 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-iris">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Your next lead starts here
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
                  Less chasing. <span className="bg-gradient-to-r from-iris to-cyan-500 bg-clip-text text-transparent">More closing.</span>
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
                  Bring every conversation, follow-up and next step into one clear view.
                </p>
              </div>
              <a
                href="#pricing"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-ink py-2 pl-5 pr-2 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(26,22,70,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(109,76,240,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris"
              >
                Get started · {PRICE}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-cyan-300 group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            </div>
            <span className="relative mt-3 block text-xs text-slate-400 sm:absolute sm:bottom-4 sm:right-10 sm:mt-0">{PRICE_NOTE}</span>
          </div>

          <div className="grid gap-10 border-b border-slate-200/80 py-10 sm:py-12 lg:grid-cols-[1.25fr_2fr] lg:gap-16">
            <div>
              <a href="#top" aria-label={`${PRODUCT_NAME}, back to top`} className="inline-flex items-center gap-2.5 font-display text-2xl font-bold tracking-[-0.06em] text-ink">
                <span aria-hidden="true" className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-iris to-cyan-400 text-sm font-extrabold text-white shadow-[0_6px_18px_rgba(109,76,240,0.24)]">n<span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white/70 bg-cyan-200/80" /></span>
                <span>neo<span className="text-iris">CRM</span></span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                A calmer way to keep your pipeline moving and your whole team in sync.
              </p>
              <a href="#top" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-slate-400 transition-colors hover:text-iris">
                Back to the top <ArrowDownRight className="h-3.5 w-3.5 -rotate-45" aria-hidden="true" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 sm:gap-x-8">
              {COLUMNS.map((col) => (
                <nav key={col.title} aria-label={col.title}>
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-ink">{col.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {col.links.map(([label, href]) => (
                      <li key={label}>
                        <a href={href} className={linkClass}>{label}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} {PRODUCT_NAME}. Made for better follow-through.</span>
            <span className="text-slate-400">{PRICE} · {PRICE_NOTE}</span>
          </div>
        </div>

        {/* Oversized cursor-lit wordmark is the footer's signature. */}
        <div onPointerMove={onMove} onPointerLeave={onLeave} className="relative select-none overflow-hidden px-2 pb-1 sm:px-5">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-cyan-100/70 via-blue-100/35 to-transparent" />
          <motion.div
            aria-hidden="true"
            style={{ backgroundImage: wordmark }}
            className="relative bg-clip-text text-center font-display text-[23vw] font-extrabold leading-[0.76] tracking-[-0.09em] text-transparent sm:text-[min(17rem,19vw)]"
          >
            {PRODUCT_NAME}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
