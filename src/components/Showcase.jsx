import { BarChart3, KanbanSquare, Table2 } from "lucide-react";
import Reveal from "./Reveal";
import { SCREENS, SHOWCASE } from "../data/content";

const ICONS = { overview: BarChart3, pipeline: KanbanSquare, leads: Table2 };
const HEIGHTS = { overview: 651, pipeline: 900, leads: 900 };
const SPANS = { overview: "lg:col-span-6", pipeline: "lg:col-span-3", leads: "lg:col-span-3" };

export default function Showcase() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
      <Reveal>
        <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Everything your sales team touches
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-6">
        {SHOWCASE.map(({ screen, badge, title, text }, i) => {
          const Icon = ICONS[screen];
          const { src, alt } = SCREENS[screen];
          return (
            <Reveal key={screen} delay={i * 0.08} className={SPANS[screen]}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white bg-white/80 shadow-[0_20px_60px_rgba(109,76,240,0.12)] backdrop-blur transition duration-300 hover:border-violet-300 hover:shadow-[0_30px_80px_rgba(109,76,240,0.22)]">
                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-100 text-iris">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                      <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan-500" />
                      {badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 max-w-2xl text-slate-600">{text}</p>
                </div>
                <div className="mt-auto overflow-hidden border-t border-violet-100">
                  <img
                    src={src}
                    alt={alt}
                    width="1800"
                    height={HEIGHTS[screen]}
                    loading="lazy"
                    decoding="async"
                    className="block w-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
