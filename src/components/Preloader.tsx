import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../lib/data";
import { ease } from "../lib/ease";

/** Counts to 100, then lifts away in two layers (ink, then sapphire). Only runs on the first visit of a session. */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [skip] = useState(() => {
    try {
      return (
        sessionStorage.getItem("sn-loaded") === "1" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    } catch {
      return false;
    }
  });
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(!skip);

  useEffect(() => {
    if (skip) {
      onDone();
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1700;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else
        setTimeout(() => {
          setOpen(false);
          onDone();
          document.documentElement.style.overflow = "";
          try {
            sessionStorage.setItem("sn-loaded", "1");
          } catch {
            /* storage unavailable */
          }
        }, 250);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="sapphire"
            className="fixed inset-0 z-[99] bg-sapphire"
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease, delay: 0.12 }}
          />
          <motion.div
            key="ink"
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-5 text-paper md:p-10"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex justify-between label text-white/50">
              <span>{profile.name}</span>
              <span>Portfolio ©{new Date().getFullYear()}</span>
            </div>
            <div className="flex items-end justify-between gap-6">
              <div className="label space-y-1 text-white/50">
                <p>Colombo, Sri Lanka</p>
                <p>{profile.coords}</p>
              </div>
              <span className="font-display text-[22vw] font-semibold leading-[0.8] tracking-tightest tabular-nums md:text-[14vw]">
                {String(count).padStart(3, "0")}
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
