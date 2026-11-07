import { motion } from "framer-motion";
import Waves from "./Waves";
import NeoGraphic from "./NeoGraphic";
import { PRICE, PRICE_NOTE } from "../config";

export default function Hero({ onBuy }) {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 text-center sm:pt-24">
      <Waves />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-3xl"
      >
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Every inquiry, clearly owned.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
          Leads, pipelines, follow-ups and team performance in one workspace, on web and mobile.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={onBuy} className="rounded-full bg-iris px-7 py-3.5 font-semibold text-white shadow-[0_14px_40px_rgba(109,76,240,0.45)] transition hover:-translate-y-0.5 hover:bg-iris-dark">
            Buy neoCRM
          </button>
          <a href="#demo" className="rounded-full border border-violet-200 bg-white/80 px-7 py-3.5 font-semibold text-ink shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-white">
            Watch the demo
          </a>
        </div>
        <p className="mt-5 text-sm text-slate-500">{PRICE}, {PRICE_NOTE.toLowerCase()}</p>
      </motion.div>

      <NeoGraphic />
    </section>
  );
}
