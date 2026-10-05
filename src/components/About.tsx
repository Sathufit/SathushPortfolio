import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { profile, stats } from "../lib/data";
import { MaskLine, SectionHead } from "./motion";

const statement =
  "I'm Sathush, a full-stack engineer at ScaleX Global and a Software Engineering student at SLIIT, previously interning at LSEG. I build websites, apps and AI features for businesses that need software to bring in customers.".split(
    " "
  );

/** Each word brightens as the scroll position passes it. */
function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.24em] inline-block">
      {word}
    </motion.span>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 0.85", "end 0.45"] });
  const step = 1 / statement.length;

  return (
    <section id="about" className="gutter py-28 md:py-40">
      <SectionHead label="About" note="SLIIT · Software Engineering" />

      <p
        ref={textRef}
        className="mt-14 max-w-[30ch] font-display text-[clamp(2rem,5.2vw,5rem)] font-medium leading-[1.04] tracking-tight md:mt-20"
      >
        {statement.map((word, i) => (
          <Word key={i} word={word} progress={scrollYProgress} range={[i * step, (i + 1) * step]} />
        ))}
      </p>

      <div className="mt-24 grid gap-14 md:mt-32 md:grid-cols-12">
        <dl className="grid grid-cols-3 gap-px self-start overflow-hidden border border-line bg-line md:col-span-7">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper p-4 sm:p-6 md:p-8">
              <dd className="font-display text-4xl font-semibold tracking-tightest sm:text-5xl md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="label mt-3 text-smoke">{s.label}</dt>
            </div>
          ))}
        </dl>

        <div className="space-y-6 text-lg leading-relaxed text-ink/75 md:col-span-4 md:col-start-9">
          <MaskLine>
            <span className="label text-smoke">(How I work)</span>
          </MaskLine>
          <p>
            I care about the parts people feel but rarely name: how fast the first screen paints, whether the form remembers
            what you typed, how a menu behaves on a cheap Android phone.
          </p>
          <p>
            I write typed, tested code the next developer will thank me for, and I hand over projects you can run without me.
          </p>
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 border-b border-ink pb-1 font-medium"
          >
            Download CV
            <span className="transition-transform duration-500 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
