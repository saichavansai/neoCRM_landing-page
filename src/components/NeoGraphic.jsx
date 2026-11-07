import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BellRing, TrendingUp, UserPlus } from "lucide-react";

const NODES = [
  { id: "inquiry", x: 22, y: 27 },
  { id: "conversion", x: 80, y: 36 },
  { id: "followup", x: 31, y: 78 },
  { id: "top", x: 52, y: 8 },
  { id: "right", x: 91, y: 80 },
  { id: "left", x: 6, y: 62 },
];

const CARDS = [
  { id: "inquiry", icon: UserPlus, title: "New inquiry", note: "Assigned to Priya", tone: "bg-violet-100 text-violet-600", position: "left-0 top-0 sm:left-[2%] sm:top-[3%]", delay: 0 },
  { id: "conversion", icon: TrendingUp, title: "Conversion up", note: "Last 30 days", tone: "bg-cyan-100 text-cyan-600", position: "right-0 top-[24%] sm:right-[1%]", delay: -2 },
  { id: "followup", icon: BellRing, title: "Follow-up due", note: "Today, 4:30 PM", tone: "bg-indigo-100 text-indigo-600", position: "bottom-0 left-[10%] sm:left-[22%]", delay: -4 },
];

export default function NeoGraphic() {
  const [active, setActive] = useState(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const spring = { stiffness: 120, damping: 18 };
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-12, 12]), spring);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [8, -8]), spring);
  const glowX = useTransform(pointerX, (value) => `${value * 100}%`);
  const glowY = useTransform(pointerY, (value) => `${value * 100}%`);

  const trackPointer = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - left) / width);
    pointerY.set((event.clientY - top) / height);
  };

  const resetPointer = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <div
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
      className="relative mx-auto mt-12 h-[380px] w-full max-w-5xl sm:h-[460px]"
    >
      <motion.div
        style={{ left: glowX, top: glowY }}
        className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-300/50 to-cyan-200/50 blur-3xl"
      />

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {NODES.map(({ id, x, y }) => (
          <line
            key={id}
            x1="50"
            y1="50"
            x2={x}
            y2={y}
            vectorEffect="non-scaling-stroke"
            strokeDasharray="5 9"
            strokeLinecap="round"
            style={{ strokeWidth: active === id ? 2.4 : 1.4 }}
            className={"transition-[stroke-width] duration-300 " + (active === id ? "animate-flow-fast stroke-cyan-500" : "animate-flow stroke-violet-400/60")}
          />
        ))}
      </svg>

      {NODES.map(({ id, x, y }, index) => (
        <span key={id} style={{ left: x + "%", top: y + "%" }} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/50" style={{ animationDelay: index * 0.5 + "s" }} />
          <span className={"relative block rounded-full bg-cyan-500 shadow-[0_0_14px_rgba(34,211,238,0.9)] transition-all duration-300 " + (active === id ? "h-4 w-4" : "h-2.5 w-2.5")} />
        </span>
      ))}

      <div className="pointer-events-none absolute inset-0 grid place-items-center [perspective:900px]">
        <motion.span
          style={{ rotateX, rotateY }}
          className="block select-none bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text font-display text-[19vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.9)] [filter:drop-shadow(0_16px_30px_rgba(109,76,240,0.35))] sm:text-[150px] lg:text-[180px]"
        >
          neoCRM
        </motion.span>
      </div>

      {CARDS.map(({ id, icon: Icon, title, note, tone, position, delay }) => (
        <div key={id} onPointerEnter={() => setActive(id)} onPointerLeave={() => setActive(null)} className={"absolute " + position}>
          <div className="animate-float" style={{ animationDelay: delay + "s" }}>
            <div className="flex items-center gap-3 rounded-2xl border border-white bg-white/70 p-3 shadow-[0_18px_50px_rgba(109,76,240,0.18)] backdrop-blur-xl transition duration-300 hover:scale-105 hover:shadow-[0_24px_60px_rgba(109,76,240,0.3)] sm:p-3.5">
              <span className={"grid h-9 w-9 place-items-center rounded-xl " + tone}>
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="text-xs text-slate-500">{note}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
