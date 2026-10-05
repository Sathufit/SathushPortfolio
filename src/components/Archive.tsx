import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { archive, type ProjectKind } from "../lib/data";
import { useFinePointer } from "../lib/hooks";
import { SectionHead } from "./motion";
import { ease } from "../lib/ease";

const filters: ("All" | ProjectKind)[] = ["All", "Client", "Product", "Mobile", "Team"];

export default function Archive() {
  const fine = useFinePointer();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26 });
  const sy = useSpring(y, { stiffness: 220, damping: 26 });

  const list = archive.filter((p) => filter === "All" || p.kind === filter);
  const preview = archive.find((p) => p.title === hovered)?.image;

  return (
    <section
      className="gutter relative py-28 md:py-40"
      onPointerMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      <SectionHead label="Index" note={`${archive.length} projects`} />

      <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[0.9] tracking-tightest">
          The full index.
        </h2>
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const count = f === "All" ? archive.length : archive.filter((p) => p.kind === f).length;
            const active = filter === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={`relative rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                  active ? "border-ink text-paper" : "border-line text-ink hover:border-ink"
                }`}
              >
                {active && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ duration: 0.5, ease }} />
                )}
                <span className="relative">
                  {f} <sup className="font-mono text-[9px] opacity-60">{count}</sup>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="label mt-12 hidden grid-cols-12 gap-4 border-b border-line pb-3 text-smoke md:grid">
        <span className="col-span-5">Project</span>
        <span className="col-span-2">Type</span>
        <span className="col-span-4">Stack</span>
        <span className="col-span-1 text-right">Link</span>
      </div>

      <motion.ul layout className="mt-4 md:mt-0" onPointerLeave={() => setHovered(null)}>
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((p) => {
            const open = expanded === p.title;
            return (
              <motion.li
                layout
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease }}
                onPointerEnter={() => setHovered(p.title)}
                className="group relative border-b border-line"
              >
                {/* Ink fill rises from the baseline on hover */}
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-expo group-hover:scale-y-100" />
                <button
                  onClick={() => setExpanded(open ? null : p.title)}
                  aria-expanded={open}
                  className="relative grid w-full grid-cols-12 items-center gap-4 py-5 text-left transition-colors duration-500 group-hover:text-paper md:py-6"
                >
                  <span className="col-span-9 font-display text-2xl font-medium tracking-tight transition-transform duration-500 ease-expo group-hover:translate-x-3 md:col-span-5 md:text-3xl">
                    {p.title}
                  </span>
                  <span className="label col-span-3 text-right text-smoke group-hover:text-white/60 md:col-span-2 md:text-left">
                    {p.kind}
                  </span>
                  <span className="col-span-4 hidden truncate text-sm text-smoke group-hover:text-white/60 md:block">
                    {p.tech.slice(0, 3).join(" · ")}
                  </span>
                  <span className="col-span-1 hidden text-right text-xl transition-transform duration-500 ease-expo group-hover:rotate-45 md:block">
                    ↗
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="relative overflow-hidden group-hover:text-paper"
                    >
                      <div className="flex flex-col gap-4 pb-6 md:ml-[calc(41.66%+0.5rem)] md:flex-row md:items-end md:justify-between">
                        <p className="max-w-[52ch] text-ink/70 group-hover:text-white/70">{p.summary}</p>
                        <div className="flex shrink-0 gap-5 text-sm font-medium">
                          {p.url && (
                            <a href={p.url} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                              Live site ↗
                            </a>
                          )}
                          {p.github && (
                            <a href={p.github} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                              Source ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      {fine && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-30 w-[300px] overflow-hidden rounded-[4px]"
          style={{ x: sx, y: sy, translateX: "24px", translateY: "-50%" }}
          animate={{ opacity: preview ? 1 : 0, scale: preview ? 1 : 0.8 }}
          transition={{ duration: 0.35, ease }}
        >
          {preview && <img src={preview} alt="" className="aspect-[16/10] w-full object-cover object-top" />}
        </motion.div>
      )}
    </section>
  );
}
