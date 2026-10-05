import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { lockScroll, scrollToId, useColomboTime } from "../lib/hooks";
import { profile } from "../lib/data";
import { ease } from "../lib/ease";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

/** Hover swaps the label for a copy that rolls up from below. */
function RollLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group relative block h-[1.15em] overflow-hidden leading-[1.15]">
      <span className="block transition-transform duration-500 ease-expo group-hover:-translate-y-full">{label}</span>
      <span aria-hidden className="absolute inset-x-0 top-full block transition-transform duration-500 ease-expo group-hover:-translate-y-full">
        {label}
      </span>
    </button>
  );
}

export default function Nav({ ready }: { ready: boolean }) {
  const time = useColomboTime();
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);

  // Sections marked data-dark sit under light nav text. Checked once per frame at most —
  // cheaper than mix-blend-mode, which re-blends the whole bar on every scroll frame.
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const dark = Array.from(document.querySelectorAll("[data-dark]")).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= 36 && r.bottom > 36;
      });
      setOnDark(dark);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    lockScroll(open);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 450 : 0);
  };

  return (
    <>
      {/* Blend mode keeps the bar legible over both paper and ink sections */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease, delay: 0.5 }}
        className={`gutter fixed inset-x-0 top-0 z-50 flex items-center justify-between py-5 transition-colors duration-300 ${open || onDark ? "text-paper" : "text-ink"}`}
      >
        <button onClick={() => go("top")} className="font-display text-lg font-semibold tracking-tight">
          Sathush<span className="opacity-50">.N</span>
        </button>

        <span className="label hidden tabular-nums opacity-70 lg:block">
          Colombo {time} — GMT+5:30
        </span>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <RollLink key={l.id} label={l.label} onClick={() => go(l.id)} />
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="label flex items-center gap-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="gutter fixed inset-0 z-40 flex flex-col justify-end bg-sapphire pb-10 text-paper"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
          >
            <ul className="space-y-1">
              {[{ id: "top", label: "Home" }, ...links].map((l, i) => (
                <li key={l.id} className="overflow-hidden">
                  <motion.button
                    onClick={() => go(l.id)}
                    className="font-display text-6xl font-semibold tracking-tightest"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.06 }}
                  >
                    {l.label}
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="label mt-12 flex justify-between text-white/70">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="tabular-nums">{time}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
