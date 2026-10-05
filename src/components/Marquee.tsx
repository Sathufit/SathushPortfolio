import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { stack } from "../lib/data";

/** An endless row that drifts on its own and speeds up (or reverses) with scroll velocity. */
function Row({ items, baseVelocity, active }: { items: string[]; baseVelocity: number; active: boolean }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (!active) return;
    let move = direction.current * baseVelocity * (delta / 1000);
    if (factor.get() < 0) direction.current = -1;
    else if (factor.get() > 0) direction.current = 1;
    move += direction.current * move * factor.get();
    baseX.set(baseX.get() + move);
  });

  const row = [...items, ...items];
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="flex shrink-0 will-change-transform">
        {row.map((item, i) => (
          <span key={i} className="flex items-center font-display text-[clamp(2.5rem,7vw,7rem)] font-semibold tracking-tightest">
            <span className={i % 2 ? "text-outline" : ""}>{item}</span>
            <span className="mx-[0.4em] inline-block h-[0.18em] w-[0.18em] rounded-full bg-sapphire" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  const ref = useRef<HTMLElement>(null);
  const active = useInView(ref, { margin: "100px 0px" });
  const half = Math.ceil(stack.length / 2);
  return (
    <section ref={ref} aria-label="Tech stack" className="space-y-2 overflow-hidden border-y border-line py-10 md:py-14">
      <Row items={stack.slice(0, half)} baseVelocity={-2.5} active={active} />
      <Row items={stack.slice(half)} baseVelocity={2.5} active={active} />
    </section>
  );
}
