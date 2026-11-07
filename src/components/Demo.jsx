import { BarChart3, BellRing, KanbanSquare, Table2 } from "lucide-react";
import Reveal from "./Reveal";
import BrowserFrame from "./BrowserFrame";

const HIGHLIGHTS = [
  [KanbanSquare, "Drag-and-drop pipeline"],
  [Table2, "Searchable lead directory"],
  [BarChart3, "Conversion reports"],
  [BellRing, "Follow-up reminders"],
];

export default function Demo() {
  return (
    <section id="demo" className="px-5 py-14 sm:py-16">
      <Reveal className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">See neoCRM at work</h2>
        <div className="relative mt-12">
          <div className="absolute -inset-5 -z-10 animate-pulse-glow rounded-[2rem] bg-gradient-to-r from-violet-300/60 via-indigo-300/50 to-cyan-300/60 blur-3xl" />
          <BrowserFrame>
            <video
              src="/video/neocrm-demo.mp4"
              poster="/video/poster.webp"
              controls
              playsInline
              preload="metadata"
              className="block aspect-video w-full bg-black"
            />
          </BrowserFrame>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {HIGHLIGHTS.map(([Icon, label]) => (
            <li key={label} className="flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-ink hover:shadow-md">
              <Icon className="h-4 w-4 text-iris" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
