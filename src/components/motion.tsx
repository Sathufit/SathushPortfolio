import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer } from "../lib/hooks";
import { ease } from "../lib/ease";

/** Sizes a single line of text so it spans its container exactly. `children` may replace the plain text with animated markup of the same width. */
export function FitText({ text: content, children, className = "" }: { text: string; children?: ReactNode; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState(100);

  const fit = useRef(() => {});
  fit.current = () => {
    if (!wrap.current || !text.current) return;
    // Scale from the current size so the DOM is never mutated behind React's back
    const current = parseFloat(getComputedStyle(text.current).fontSize);
    const next = (current * wrap.current.clientWidth) / text.current.scrollWidth;
    setSize((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
  };

  useLayoutEffect(() => {
    const run = () => fit.current();
    run();
    const ro = new ResizeObserver(run);
    if (wrap.current) ro.observe(wrap.current);
    document.fonts?.ready.then(run);
    return () => ro.disconnect();
  }, [content]);

  // Kerning doesn't scale perfectly linearly, so re-measure until the size settles
  useLayoutEffect(() => fit.current(), [size]);

  return (
    <div ref={wrap} className="w-full">
      <span
        ref={text}
        className={`block w-max whitespace-nowrap leading-[0.8] ${className}`}
        style={{ fontSize: size, paddingRight: "0.05em" }} // counter the trailing negative tracking
        aria-label={content}
      >
        {children ?? content}
      </span>
    </div>
  );
}

/** Letters rise out of a mask one after another. */
export function RiseLetters({
  text,
  show,
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  show: boolean;
  delay?: number;
  stagger?: number;
}) {
  return (
    <span aria-hidden className="inline-flex overflow-hidden pb-[0.06em]">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "105%" }}
          animate={show ? { y: "0%" } : { y: "105%" }}
          transition={{ duration: 1.1, ease, delay: delay + i * stagger }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * A line of text that slides up from a mask when scrolled into view.
 * The visible outer span is what gets observed — the inner one starts clipped, so it would never count as in view.
 */
export function MaskLine({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.span
      className={`block overflow-hidden ${className}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      <motion.span
        className="block"
        variants={{ hidden: { y: "110%" }, shown: { y: "0%", transition: { duration: 1, ease, delay } } }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/** Pulls its child toward the pointer while hovered. */
export function Magnetic({ children, strength = 0.35, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const fine = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (!fine) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Section eyebrow: "(Label)" on the left, a note on the right, hairline beneath. */
export function SectionHead({ label, note, dark = false }: { label: string; note?: string; dark?: boolean }) {
  return (
    <div className={`flex items-end justify-between border-b pb-4 ${dark ? "border-white/15 text-white/60" : "border-line text-smoke"}`}>
      <span className="label">({label})</span>
      {note && <span className="label">{note}</span>}
    </div>
  );
}
