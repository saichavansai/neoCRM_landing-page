import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckSquare, Phone, Plug, ShieldCheck, Smartphone, Users } from "lucide-react";
import Reveal from "./Reveal";

/* Each shape uses the .shp class (see index.css). On card hover every shape
   moves/rotates/scales by its own --tx / --ty / --r / --s values. */
const s = (r, tx, ty, sc) => ({ "--r": r, "--tx": tx, "--ty": ty, "--s": sc });

function PeachShapes({ c }) {
  const d = (cx, cy, st) => (
    <g transform={`rotate(45 ${cx} ${cy})`}>
      <rect className="shp" x={cx - 28} y={cy - 28} width="56" height="56" rx="15" fill={st.fill} style={st.style} />
    </g>
  );
  return (
    <>
      {d(125, 55, { fill: c[1], style: s("90deg", "10px", "-14px", 1.15) })}
      {d(68, 118, { fill: c[2], style: s("-90deg", "-14px", "0px", 1.2) })}
      {d(180, 118, { fill: c[0], style: s("90deg", "14px", "0px", 1.1) })}
      {d(125, 180, { fill: c[1], style: s("-90deg", "0px", "16px", 1.2) })}
    </>
  );
}

function BlueShapes({ c }) {
  return (
    <>
      <path className="shp" d="M100 120 V70 a50 50 0 0 1 50-50 h50 v100 z" fill={c[0]} style={s("0deg", "10px", "-12px", 1.1)} />
      <path className="shp" d="M100 140 h100 v100 h-50 a50 50 0 0 1 -50 -50z" fill={c[1]} style={s("0deg", "10px", "14px", 1.1)} />
      <rect className="shp" x="30" y="95" width="60" height="60" rx="30" fill={c[2]} style={s("180deg", "-16px", "0px", 1.3)} />
    </>
  );
}

function LavenderShapes({ c }) {
  return (
    <>
      <path className="shp" d="M205 20 A80 80 0 0 0 205 180 Z" fill={c[1]} style={s("-12deg", "-16px", "0px", 1.12)} />
      <circle className="shp" cx="135" cy="220" r="34" fill={c[0]} style={s("0deg", "-10px", "-16px", 1.25)} />
      <rect className="shp" x="40" y="70" width="42" height="42" rx="13" fill={c[2]} style={s("135deg", "-10px", "-10px", 1.2)} />
    </>
  );
}

function GreenShapes({ c }) {
  return (
    <>
      <g transform="rotate(45 140 70)">
        <rect className="shp" x="100" y="30" width="80" height="80" rx="26" fill={c[0]} style={s("90deg", "-8px", "-10px", 1.12)} />
      </g>
      <path className="shp" d="M110 140 h70 q0 40 -35 55 q35 15 35 55 h-70 q0 -40 35 -55 q-35 -15 -35 -55z" fill={c[1]} style={s("180deg", "0px", "6px", 1.05)} />
      <circle className="shp" cx="58" cy="205" r="22" fill={c[2]} style={s("0deg", "-12px", "-14px", 1.35)} />
    </>
  );
}

function RoseShapes({ c }) {
  return (
    <>
      <circle className="shp" cx="150" cy="130" r="92" fill={c[2]} style={s("0deg", "0px", "0px", 1.12)} />
      <circle className="shp" cx="150" cy="130" r="60" fill={c[1]} style={s("0deg", "0px", "0px", 1.2)} />
      <circle className="shp" cx="150" cy="130" r="30" fill={c[0]} style={s("0deg", "0px", "0px", 1.45)} />
      <circle className="shp" cx="50" cy="55" r="18" fill={c[1]} style={s("0deg", "-10px", "-12px", 1.4)} />
    </>
  );
}

function SkyShapes({ c }) {
  return (
    <>
      <rect className="shp" x="60" y="40" width="170" height="44" rx="22" fill={c[0]} style={s("0deg", "-22px", "0px", 1)} />
      <rect className="shp" x="100" y="100" width="170" height="44" rx="22" fill={c[1]} style={s("0deg", "22px", "0px", 1)} />
      <rect className="shp" x="40" y="160" width="170" height="44" rx="22" fill={c[2]} style={s("0deg", "-22px", "0px", 1)} />
      <rect className="shp" x="90" y="220" width="170" height="44" rx="22" fill={c[0]} style={s("0deg", "22px", "0px", 1)} />
    </>
  );
}

const ITEMS = [
  {
    Icon: CheckSquare, tag: "Follow-ups", title: "Follow-up tasks",
    text: "Schedule calls, meetings and emails, and see what is pending, done or overdue.",
    cta: "Try the demo", href: "#demo", Shapes: PeachShapes,
    bg: ["#fff3e6", "#ffe6cc"], shapes: ["#ffcf9e", "#ffdcb8", "#ffe7cf"],
    glow: "rgba(251,146,60,0.45)", border: "#fdba74", icon: "#e8731a",
  },
  {
    Icon: Users, tag: "Teams", title: "Teams and ownership",
    text: "Organize members into teams and branches, and assign leads with assignment rules or round-robin routing where configured.",
    cta: "Try the demo", href: "#demo", Shapes: BlueShapes,
    bg: ["#ecf3ff", "#d8e8ff"], shapes: ["#b9d4ff", "#cddfff", "#dbe8ff"],
    glow: "rgba(96,165,250,0.5)", border: "#93c5fd", icon: "#2d6bd8",
  },
  {
    Icon: Plug, tag: "Lead capture", title: "Lead capture",
    text: "Add leads manually, import CSV files, use website forms, or connect supported Meta, Google Ads, LinkedIn and WhatsApp flows once configured.",
    cta: "See how it works", href: "#features", Shapes: LavenderShapes,
    bg: ["#f6eeff", "#e9dbff"], shapes: ["#dac3ff", "#e5d4ff", "#eee1ff"],
    glow: "rgba(167,139,250,0.5)", border: "#c4b5fd", icon: "#7a4bd9",
  },
  {
    Icon: Phone, tag: "Calling", title: "Calling from the CRM",
    text: "A softphone, call controls and call logs next to the lead, when a supported provider is set up.",
    cta: "See how it works", href: "#features", Shapes: GreenShapes,
    bg: ["#eefaea", "#dcf3d3"], shapes: ["#bde7ae", "#cdeec1", "#daf3d1"],
    glow: "rgba(74,222,128,0.45)", border: "#86efac", icon: "#2b9a47",
  },
  {
    Icon: Smartphone, tag: "Mobile", title: "Mobile companion app",
    text: "Check your dashboard, lead details and follow-up tasks from your phone, with tap-to-call where available and configured.",
    cta: "See pricing", href: "#pricing", Shapes: RoseShapes,
    bg: ["#fff0f5", "#ffe0ea"], shapes: ["#ffc2d3", "#ffd2de", "#ffe1e9"],
    glow: "rgba(251,113,133,0.45)", border: "#fda4af", icon: "#de4468",
  },
  {
    Icon: ShieldCheck, tag: "Admin", title: "Admin controls",
    text: "Manage roles, feature permissions, pipelines, tags and integrations, and review audit activity.",
    cta: "See pricing", href: "#pricing", Shapes: SkyShapes,
    bg: ["#e9f9fb", "#d2f0f5"], shapes: ["#abe2ec", "#c1eaf1", "#d3f1f6"],
    glow: "rgba(34,211,238,0.45)", border: "#67e8f9", icon: "#0b8fa8",
  },
];

function FeatureCard({ item }) {
  const { Icon, tag, title, text, cta, href, Shapes, bg, shapes, glow, border, icon } = item;
  const ref = useRef(null);
  const reduce = useReducedMotion();

  // pointer position in px (spotlight) and 0..1 (tilt + shape parallax)
  const px = useMotionValue(-500);
  const py = useMotionValue(-500);
  const nx = useMotionValue(0.5);
  const ny = useMotionValue(0.5);
  const sx = useSpring(nx, { stiffness: 140, damping: 16, mass: 0.4 });
  const sy = useSpring(ny, { stiffness: 140, damping: 16, mass: 0.4 });

  const rotateY = useTransform(sx, [0, 1], [-7, 7]);
  const rotateX = useTransform(sy, [0, 1], [7, -7]);
  const shapeX = useTransform(sx, [0, 1], [26, -26]);
  const shapeY = useTransform(sy, [0, 1], [18, -18]);
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${px}px ${py}px, rgba(255,255,255,0.95), rgba(255,255,255,0) 65%), radial-gradient(220px circle at ${px}px ${py}px, ${glow}, rgba(255,255,255,0) 70%)`;

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    px.set(x);
    py.set(y);
    nx.set(x / r.width);
    ny.set(y / r.height);
  };
  const onLeave = () => {
    nx.set(0.5);
    ny.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileHover={reduce ? undefined : { scale: 1.025 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformStyle: "preserve-3d",
        "--glow": glow,
        "--edge": border,
      }}
      className="group relative h-full min-h-[300px] rounded-[28px] shadow-[0_14px_40px_rgba(109,76,240,0.1)] transition-shadow duration-500 hover:shadow-[0_34px_80px_-14px_var(--glow)]"
    >
      {/* background layer: tint, shapes, spotlight, shine */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/80 transition-colors duration-500 group-hover:border-[var(--edge)]"
        style={{ background: `linear-gradient(135deg, ${bg[0]}, ${bg[1]})` }}
      >
        <div className="pointer-events-none absolute inset-y-0 -right-8 flex w-[52%] items-center justify-end opacity-60 sm:opacity-100">
          <motion.div style={reduce ? undefined : { x: shapeX, y: shapeY }} className="h-[110%]">
            <svg viewBox="0 0 230 270" className="h-full w-auto overflow-visible" aria-hidden="true">
              <Shapes c={shapes} />
            </svg>
          </motion.div>
        </div>
        <motion.div
          aria-hidden="true"
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 [transition:transform_1s_ease,opacity_.3s] group-hover:translate-x-[520%] group-hover:opacity-100"
        />
      </div>

      {/* content layer floats above the card in 3D */}
      <div className="relative z-10 flex h-full flex-col items-start p-7 sm:p-8" style={{ transform: "translateZ(30px)" }}>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
          <Icon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-[360deg]" style={{ color: icon }} aria-hidden="true" />
          {tag}
        </span>
        <h3 className="mt-6 max-w-[16ch] font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-[1.65rem]">{title}</h3>
        <p className="mt-3 max-w-[34ch] text-[0.95rem] leading-relaxed text-slate-600 sm:max-w-[60%]">{text}</p>
        <a
          href={href}
          className="mt-auto inline-flex items-center gap-1.5 border-b border-ink/70 pb-0.5 pt-6 text-sm font-medium text-ink transition-[border-color] hover:border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris"
        >
          {cta}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
      <Reveal>
        <h2 className="mx-auto max-w-xl text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          And everything around the pipeline
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.08} className="h-full [perspective:1100px]">
            <FeatureCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
