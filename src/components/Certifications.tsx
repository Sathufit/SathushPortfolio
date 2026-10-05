import { useLayoutEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { certifications, certificationsUrl, formatMonth, otherCourses, type Certification } from "../lib/data";
import { SectionHead } from "./motion";
import { ease } from "../lib/ease";

const issuerMark: Record<string, string> = {
  "Amazon Web Services": "AWS",
  LinkedIn: "in",
  "Financial Edge Training": "FE",
  MongoDB: "MDB",
  Simplilearn: "SL",
  "Cognitive Class (IBM)": "IBM",
};

function Card({ cert, index }: { cert: Certification; index: number }) {
  const [year] = cert.issued.split("-");
  return (
    <li className="group flex h-[380px] w-[78vw] shrink-0 select-none flex-col justify-between rounded-[6px] border border-white/15 bg-white/[0.03] p-6 transition-colors duration-500 hover:border-sapphire-light/60 hover:bg-white/[0.06] sm:w-[340px] md:p-7">
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 font-mono text-[11px] font-medium text-white/80 transition-colors duration-500 group-hover:border-sapphire-light group-hover:bg-sapphire group-hover:text-paper">
          {issuerMark[cert.issuer] ?? cert.issuer.slice(0, 2)}
        </span>
        <span className="font-display text-5xl font-semibold tracking-tightest text-white/10 transition-colors duration-500 group-hover:text-white/25">
          {year}
        </span>
      </div>

      <div>
        <p className="label text-white/50">{cert.issuer}</p>
        <h3 className="mt-3 font-display text-2xl font-medium leading-[1.08] tracking-tight">{cert.title}</h3>
      </div>

      <div className="space-y-3 border-t border-white/15 pt-4">
        <div className="label flex justify-between text-white/50">
          <span>Issued {formatMonth(cert.issued)}</span>
          <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        </div>
        {cert.credentialId ? (
          <p className="truncate font-mono text-[11px] text-white/40" title={cert.credentialId}>
            ID {cert.credentialId}
          </p>
        ) : (
          <p className="truncate text-sm text-white/40">{cert.skills?.join(" · ")}</p>
        )}
      </div>
    </li>
  );
}

/** A rail of credential cards: drag it, or step through with the arrow buttons. */
export default function Certifications() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const [limit, setLimit] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!viewport.current || !track.current) return;
      // Stop when the last card meets the right gutter
      const style = getComputedStyle(viewport.current);
      const inner = viewport.current.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      setLimit(Math.min(0, inner - track.current.scrollWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewport.current) ro.observe(viewport.current);
    return () => ro.disconnect();
  }, []);

  const step = (dir: 1 | -1) => {
    const card = track.current?.firstElementChild as HTMLElement | null;
    const distance = card ? card.offsetWidth + 16 : 340;
    const target = Math.max(limit, Math.min(0, x.get() - dir * distance * 2));
    animate(x, target, { duration: 0.8, ease });
  };

  return (
    <section id="certifications" data-dark className="overflow-hidden bg-ink py-28 text-paper md:py-40">
      <div className="gutter">
        <SectionHead label="Certifications" note={`${certifications.length + otherCourses.length} credentials`} dark />
        <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-display text-[clamp(2.75rem,6vw,6rem)] font-semibold leading-[0.88] tracking-tightest">
            Always
            <br />
            <span className="text-sapphire-light">learning.</span>
          </h2>
          <div className="flex items-center gap-3">
            <span className="label mr-2 hidden text-white/50 sm:block">Drag or use arrows</span>
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => step(dir)}
                aria-label={dir === -1 ? "Previous certificates" : "Next certificates"}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-lg transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
              >
                {dir === -1 ? "←" : "→"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div ref={viewport} className="gutter mt-14" data-cursor="Drag">
        <motion.ul
          ref={track}
          drag="x"
          style={{ x }}
          dragConstraints={{ left: limit, right: 0 }}
          dragElastic={0.08}
          className="flex w-max cursor-grab gap-4 will-change-transform active:cursor-grabbing"
        >
          {certifications.map((c, i) => (
            <Card key={c.title} cert={c} index={i} />
          ))}
        </motion.ul>
      </div>

      <div className="gutter mt-10 flex flex-col justify-between gap-4 text-sm text-white/50 md:flex-row md:items-center">
        <p>
          <span className="label mr-3 text-white/40">Also completed</span>
          {otherCourses.join(" · ")}
        </p>
        <a href={certificationsUrl} target="_blank" rel="noreferrer" className="shrink-0 font-medium text-paper underline-offset-4 hover:underline">
          View credentials on LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
