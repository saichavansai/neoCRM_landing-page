import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { PRICE, PRICE_NOTE, GST_RATE } from "../config";

const INCLUDED = [
  "Lead, pipeline and task management",
  "Dashboards and reports",
  "Teams, roles and permissions",
  "Web app and mobile companion app",
];

export default function Pricing({ onBuy }) {
  return (
    <section id="pricing" className="px-5 py-14 sm:py-16">
      <Reveal className="mx-auto max-w-md text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Get neoCRM</h2>
        <div className="flow-border mt-10 rounded-3xl p-8 text-left shadow-[0_30px_80px_rgba(109,76,240,0.22)]">
          <div className="font-display text-5xl font-bold tracking-tight text-ink">{PRICE}</div>
          <div className="mt-1 text-slate-500">{PRICE_NOTE}{GST_RATE > 0 ? ", plus GST" : ""}</div>
          <ul className="mt-6 space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={onBuy}
            className="mt-8 w-full rounded-full bg-iris py-3.5 font-semibold text-white shadow-[0_14px_40px_rgba(109,76,240,0.45)] transition hover:-translate-y-0.5 hover:bg-iris-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
          >
            Buy now for {PRICE}
          </button>
        </div>
      </Reveal>
    </section>
  );
}
