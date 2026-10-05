import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { services } from "../lib/data";
import { SectionHead } from "./motion";
import { ease } from "../lib/ease";

type Service = (typeof services)[number];

/** A row becomes active while it crosses the middle of the screen. */
function Row({ service, active, onActive }: { service: Service; active: boolean; onActive: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  return (
    <div ref={ref} className="border-b border-line py-8 md:py-10">
      <button onClick={onActive} className="flex w-full items-center justify-between gap-6 text-left" aria-expanded={active}>
        <h3
          className={`font-display text-[clamp(2rem,4.5vw,4.25rem)] font-semibold leading-none tracking-tightest transition-colors duration-500 ${
            active ? "text-ink" : "text-ink/20"
          }`}
        >
          {service.title}
        </h3>
        <motion.span
          animate={{ rotate: active ? 45 : 0, backgroundColor: active ? "#1F3BDB" : "rgba(0,0,0,0)" }}
          transition={{ duration: 0.5, ease }}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xl ${
            active ? "border-sapphire text-paper" : "border-line text-ink/40"
          }`}
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.6, ease }}
        className="overflow-hidden"
      >
        <p className="max-w-[48ch] pt-5 text-lg leading-relaxed text-ink/70">{service.body}</p>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const handlers = useRef(services.map((_, i) => () => setActive(i))).current;

  return (
    <section id="services" className="gutter py-28 md:py-40">
      <SectionHead label="Services" note="What you can hire me for" />

      <div className="mt-12 grid gap-10 md:grid-cols-12">
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="label text-smoke">Tools for this</p>
            <div className="relative mt-4 h-[11.5rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.ul key={active} className="space-y-1">
                  {services[active].tags.map((tag, i) => (
                    <li key={tag} className="overflow-hidden">
                      <motion.span
                        className="block font-display text-3xl font-medium tracking-tight text-sapphire"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </aside>

        <div className="md:col-span-8">
          {services.map((s, i) => (
            <Row key={s.title} service={s} active={active === i} onActive={handlers[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
