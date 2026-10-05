import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { featured } from "../lib/data";
import { MaskLine, SectionHead } from "./motion";

type Featured = (typeof featured)[number];

function Card({
  project,
  index,
  total,
  progress,
}: {
  project: Featured;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Each card shrinks as later cards slide over it
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - index) * 0.04]);
  const dim = useTransform(progress, [index / total, 1], [0, (total - index - 1) * 0.12]);
  // The screenshot settles into place as its card arrives
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  const link = project.url ?? project.github;

  return (
    <div ref={ref} className="sticky top-0 flex h-[100svh] items-center">
      <motion.article
        style={{ scale, top: `calc(${index * 22}px)`, backgroundColor: project.tone }}
        className="relative flex h-[82svh] w-full origin-top will-change-transform flex-col overflow-hidden rounded-[6px] text-paper md:grid md:grid-cols-12"
      >
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 z-10 bg-black" />

        <div className="flex min-h-0 flex-1 flex-col justify-between gap-4 p-5 md:col-span-5 md:gap-6 md:p-10">
          <div className="label flex justify-between text-white/50">
            <span>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span>{project.kind}</span>
          </div>

          <div>
            <h3 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-semibold leading-[0.9] tracking-tightest">
              {project.title}
            </h3>
            <p className="mt-3 text-white/60">{project.role}</p>
            <p className="mt-6 hidden max-w-[42ch] leading-relaxed text-white/80 sm:block">{project.summary}</p>
          </div>

          <div className="space-y-5">
            <ul className="flex flex-wrap gap-1.5">
              {project.tech.map((t, i) => (
                <li key={t} className={`${i > 2 ? "hidden md:block" : ""} label rounded-full border border-white/20 px-3 py-1.5 text-[10px] text-white/70`}>
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-white/15 pt-4 text-sm">
              <span className="hidden text-white/50 sm:block">{project.detail}</span>
              <div className="ml-auto flex gap-5">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="font-medium hover:text-sapphire-light">
                    Live ↗
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-white/60 hover:text-paper">
                    Code ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          data-cursor={project.url ? "Visit" : "Code"}
          aria-label={`Open ${project.title}`}
          className="relative order-first h-[38%] shrink-0 overflow-hidden md:order-none md:col-span-7 md:m-4 md:ml-0 md:h-auto md:rounded-[4px]"
        >
          <motion.img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            style={{ scale: imageScale }}
            className="h-full w-full object-cover object-top"
          />
        </a>
      </motion.article>
    </div>
  );
}

export default function Work() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  return (
    <section id="work" data-dark className="gutter bg-ink pb-[10vh] pt-28 text-paper md:pt-40">
      <SectionHead label="Selected work" note={`${featured.length} of 17`} dark />
      <h2 className="mt-12 font-display text-[clamp(3rem,10vw,10rem)] font-semibold leading-[0.85] tracking-tightest">
        <MaskLine>Shipped for</MaskLine>
        <MaskLine delay={0.08}>
          <span className="text-sapphire-light">real</span> businesses.
        </MaskLine>
      </h2>

      <div ref={container} className="relative mt-16">
        {featured.map((p, i) => (
          <Card key={p.title} project={p} index={i} total={featured.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
