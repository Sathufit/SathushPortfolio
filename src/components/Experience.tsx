import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { experience, formatMonth, roleLength, type Role } from "../lib/data";
import { MaskLine, SectionHead } from "./motion";
import { ease } from "../lib/ease";

/** One role on the timeline. Its dot fills once the drawn line reaches it. */
function Entry({ role }: { role: Role }) {
  const ref = useRef<HTMLLIElement>(null);
  const reached = useInView(ref, { once: true, margin: "0px 0px -45% 0px" });
  const current = role.end === null;

  return (
    <li ref={ref} className="group relative border-b border-line py-8 pl-10 md:py-10 md:pl-14">
      <motion.span
        aria-hidden
        className="absolute left-0 top-[2.6rem] h-[15px] w-[15px] rounded-full border-2 md:top-[3.1rem]"
        initial={false}
        animate={{
          backgroundColor: reached ? "#1F3BDB" : "#EFEFEC",
          borderColor: reached ? "#1F3BDB" : "rgba(14,14,14,0.25)",
          scale: reached ? 1 : 0.8,
        }}
        transition={{ duration: 0.5, ease }}
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="min-w-0">
          <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-smoke">
            <span className="tabular-nums">
              {formatMonth(role.start)} — {current ? "Present" : formatMonth(role.end!)}
            </span>
            <span aria-hidden>·</span>
            <span>{roleLength(role.start, role.end)}</span>
            {current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sapphire px-2 py-0.5 text-[10px] text-paper">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-paper" />
                Now
              </span>
            )}
          </p>
          <h3 className="mt-3 font-display text-[clamp(1.75rem,3.4vw,3rem)] font-semibold leading-[0.95] tracking-tightest transition-colors duration-500 group-hover:text-sapphire">
            {role.title}
          </h3>
          <p className="mt-2 text-lg text-ink/80">{role.org}</p>
        </div>

        <div className="shrink-0 space-y-3 md:w-[15rem] md:pt-7 md:text-right">
          <p className="text-sm text-smoke">
            {role.type}
            {role.mode && ` · ${role.mode}`}
            <br />
            {role.location}
          </p>
          {role.skills && (
            <ul className="flex flex-wrap gap-1.5 md:justify-end">
              {role.skills.map((s) => (
                <li key={s} className="label rounded-full border border-line px-2.5 py-1 text-[10px] text-ink/70">
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.6", "end 0.6"] });
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const currentCount = experience.filter((r) => r.end === null).length;

  return (
    <section id="experience" className="gutter py-28 md:py-40">
      <SectionHead label="Experience" note={`${experience.length} roles`} />

      <div className="mt-12 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <h2 className="font-display text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[0.88] tracking-tightest">
              <MaskLine>Where I've</MaskLine>
              <MaskLine delay={0.08}>worked.</MaskLine>
            </h2>
            <p className="mt-6 max-w-[30ch] text-ink/70">
              Engineering at ScaleX Global, an internship at LSEG, and years of running social media for clubs and
              associations.
            </p>
            <p className="label mt-6 text-sapphire">{currentCount} current roles</p>
          </div>
        </div>

        <ol ref={listRef} className="relative md:col-span-8">
          {/* Rail, and the sapphire line that draws down it with scroll */}
          <span aria-hidden className="absolute bottom-0 left-[7px] top-0 w-px bg-line" />
          <motion.span aria-hidden style={{ scaleY: line }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-sapphire" />
          {experience.map((role) => (
            <Entry key={`${role.org}-${role.start}`} role={role} />
          ))}
        </ol>
      </div>
    </section>
  );
}
