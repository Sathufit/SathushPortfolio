import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import portrait from "../assets/portrait.webp";
import { FitText, RiseLetters } from "./motion";
import { ease } from "../lib/ease";

const meta = [
  { k: "Role", v: "Full-stack developer" },
  { k: "Based in", v: "Colombo, Sri Lanka" },
  { k: "Currently", v: "Full Stack Engineer, ScaleX Global" },
  { k: "Status", v: "Open to freelance work", live: true },
];

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1, ease, delay },
  });

  return (
    <section ref={ref} id="top" className="gutter relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-6 pt-24 md:pb-8">
      <motion.dl style={{ opacity: fade }} className="grid grid-cols-2 gap-x-6 gap-y-5 border-b border-line pb-6 md:grid-cols-4">
        {meta.map((m, i) => (
          <motion.div key={m.k} {...fadeUp(0.6 + i * 0.07)}>
            <dt className="label text-smoke">({m.k})</dt>
            <dd className="mt-1.5 flex items-center gap-2 text-sm font-medium">
              {m.live && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sapphire opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sapphire" />
                </span>
              )}
              {m.v}
            </dd>
          </motion.div>
        ))}
      </motion.dl>

      <div className="my-10 flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-end">
        <motion.p
          {...fadeUp(0.9)}
          className="max-w-[22ch] font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium leading-[1.02] tracking-tight"
        >
          I build fast, considered web &amp; mobile products for{" "}
          <span className="text-sapphire">real businesses</span>.
        </motion.p>

        <motion.figure
          style={{ y: photoY }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={ready ? { clipPath: "inset(0% 0 0 0)" } : {}}
          transition={{ duration: 1.3, ease, delay: 0.7 }}
          className="group w-[150px] shrink-0 self-end md:w-[220px]"
        >
          {/* Transparent cutout on a panel that turns sapphire on hover */}
          <div className="aspect-[3/4] overflow-hidden bg-[#DCDCD7] transition-colors duration-700 ease-expo group-hover:bg-sapphire">
            <img
              src={portrait}
              alt="Sathush Nanayakkara"
              width={720}
              height={960}
              decoding="async"
              className="h-full w-full origin-bottom object-cover object-top grayscale transition-[filter,transform] duration-700 ease-expo group-hover:scale-[1.04] group-hover:grayscale-0"
            />
          </div>
          <figcaption className="label mt-2 flex justify-between text-smoke">
            <span>Sathush N.</span>
            <span className="hidden md:inline">Hover</span>
          </figcaption>
        </motion.figure>
      </div>

      <motion.div style={{ y: nameY }}>
        <h1 className="sr-only">Sathush Nanayakkara, full-stack developer</h1>
        <FitText text="SATHUSH" className="font-display font-semibold tracking-tightest">
          <RiseLetters text="SATHUSH" show={ready} delay={0.15} stagger={0.06} />
        </FitText>
        <motion.div {...fadeUp(1.2)} className="label mt-4 flex justify-between text-smoke">
          <span>Nanayakkara</span>
          <span className="hidden sm:block">Scroll to explore</span>
          <span>Portfolio ©{new Date().getFullYear()}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
