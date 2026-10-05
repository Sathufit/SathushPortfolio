import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { process } from "../lib/data";
import { useMediaQuery } from "../lib/hooks";
import { SectionHead } from "./motion";

function Step({ index, step, body }: { index: number; step: string; body: string }) {
  return (
    <article className="flex h-full flex-col justify-between border-l border-line p-6 md:w-[42vw] md:shrink-0 md:p-10">
      <span className="font-mono text-sm text-sapphire">{String(index + 1).padStart(2, "0")}</span>
      <div className="mt-16 md:mt-0">
        <h3 className="font-display text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.85] tracking-tightest">{step}</h3>
        <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-ink/70">{body}</p>
      </div>
    </article>
  );
}

/** On desktop, vertical scroll drives the steps sideways while the section stays pinned. */
export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const desktop = useMediaQuery("(min-width: 768px)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // Track is 34vw intro + 4 × 42vw steps = 202vw; slide until the last step meets the right edge
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0vw", "-104vw"]);
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!desktop) {
    return (
      <section className="gutter py-28">
        <SectionHead label="Process" note="Four steps" />
        <h2 className="mt-12 font-display text-5xl font-semibold leading-[0.9] tracking-tightest">From first call to launch.</h2>
        <div className="mt-12 space-y-2">
          {process.map((p, i) => (
            <Step key={p.step} index={i} {...p} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pb-10 pt-28">
        <div className="gutter">
          <SectionHead label="Process" note="Four steps" />
        </div>
        <motion.div style={{ x }} className="mt-10 flex flex-1 pl-5 will-change-transform md:pl-10">
          <div className="flex w-[34vw] shrink-0 flex-col justify-end pb-10 pr-10">
            <h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-tightest">
              From first call to launch.
            </h2>
            <p className="label mt-6 text-smoke">Keep scrolling →</p>
          </div>
          {process.map((p, i) => (
            <Step key={p.step} index={i} {...p} />
          ))}
        </motion.div>
        <div className="gutter">
          <div className="h-px w-full bg-line">
            <motion.div style={{ scaleX: bar }} className="h-px origin-left bg-sapphire" />
          </div>
        </div>
      </div>
    </section>
  );
}
