import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { PRODUCT_NAME } from "../config";

export default function BrandWordmark() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);
  const wordmark = useMotionTemplate`radial-gradient(180px circle at ${x}px ${y}px, #22d3ee, #8b6cf6 45%, rgba(139,108,246,0) 72%), linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.06))`;

  const onMove = (event) => {
    if (reduce || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - bounds.left);
    y.set(event.clientY - bounds.top);
  };

  const onLeave = () => {
    x.set(-999);
    y.set(-999);
  };

  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto mt-6 flex h-[76px] max-w-sm select-none items-center justify-center overflow-hidden rounded-2xl bg-ink shadow-[0_16px_40px_rgba(26,22,70,0.18)]"
      aria-hidden="true"
    >
      <motion.div
        style={{ backgroundImage: wordmark }}
        className="bg-clip-text text-center font-display text-[clamp(3rem,11vw,4.25rem)] font-extrabold leading-none tracking-tighter text-transparent"
      >
        {PRODUCT_NAME}
      </motion.div>
    </div>
  );
}
