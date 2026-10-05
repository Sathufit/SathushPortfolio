import { useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../lib/data";
import { copyText, scrollToId, useColomboTime } from "../lib/hooks";
import { FitText, Magnetic } from "./motion";
import { ease } from "../lib/ease";

type Status = "idle" | "sending" | "sent" | "error";

function Field({ id, label, type = "text", textarea = false }: { id: string; label: string; type?: string; textarea?: boolean }) {
  const cls =
    "peer w-full resize-none border-b border-white/30 bg-transparent pb-3 pt-6 text-lg text-paper outline-none transition-colors placeholder:text-transparent focus:border-paper";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} rows={3} required placeholder={label} className={cls} />
      ) : (
        <input id={id} name={id} type={type} required placeholder={label} className={cls} />
      )}
      <label
        htmlFor={id}
        className="label pointer-events-none absolute left-0 top-6 text-white/60 transition-all duration-300 ease-expo peer-focus:top-0 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px]"
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const time = useColomboTime();
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  // The panel opens out from an inset card to full bleed as it arrives
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.2"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [32, 0]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(profile.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const copy = async () => {
    if (await copyText(profile.email)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section ref={ref} id="contact" data-dark className="relative text-paper">
      {/* The sapphire panel widens to full bleed as it arrives; content sits above it unscaled */}
      <motion.div aria-hidden style={{ scaleX, borderRadius }} className="absolute inset-0 bg-sapphire will-change-transform" />
      <div className="gutter relative pb-10 pt-28 md:pt-36">
        <div className="label flex justify-between border-b border-white/25 pb-4 text-white/70">
          <span>(Contact)</span>
          <span className="tabular-nums">Colombo {time}</span>
        </div>

        <div className="mt-14">
          <FitText text="LET'S TALK" className="font-display font-semibold tracking-tightest" />
        </div>

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
          <div className="flex flex-col gap-10 md:col-span-5">
            <p className="max-w-[26ch] font-display text-3xl font-medium leading-tight tracking-tight">
              Have a business that needs a better website or app? Tell me about it.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Magnetic strength={0.4}>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex h-36 w-36 items-center justify-center rounded-full bg-paper text-center text-sm font-semibold text-ink transition-transform duration-500 ease-expo hover:scale-105"
                >
                  Email me
                  <br />↗
                </a>
              </Magnetic>
              <div className="space-y-2">
                <button onClick={copy} className="group block text-left">
                  <span className="label block text-white/60">{copied ? "Copied to clipboard" : "Click to copy"}</span>
                  <span className="break-all text-lg font-medium underline decoration-white/30 underline-offset-4 group-hover:decoration-paper">
                    {profile.email}
                  </span>
                </button>
                <a href={profile.phoneHref} className="block text-white/80 hover:text-paper">
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-8 md:col-span-6 md:col-start-7">
            <div className="grid gap-8 sm:grid-cols-2">
              <Field id="name" label="Your name" />
              <Field id="email" label="Email" type="email" />
            </div>
            <Field id="message" label="What are you building?" textarea />
            <div className="flex items-center justify-between gap-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={status}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-sm text-white/80"
                  role="status"
                >
                  {status === "sent" && "Thanks — your message is in my inbox."}
                  {status === "error" && "That didn't send. Email me directly instead."}
                  {status === "idle" && "I reply to every message."}
                  {status === "sending" && "Sending…"}
                </motion.p>
              </AnimatePresence>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative overflow-hidden rounded-full border border-paper px-7 py-3 text-sm font-semibold disabled:opacity-50"
              >
                <span className="absolute inset-0 translate-y-full rounded-full bg-paper transition-transform duration-500 ease-expo group-hover:translate-y-0" />
                <span className="relative transition-colors duration-500 group-hover:text-sapphire">Send message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer data-dark className="overflow-hidden bg-ink text-paper">
      <div className="gutter label flex flex-wrap items-center justify-between gap-4 py-8 text-white/60">
        <span>©{new Date().getFullYear()} Sathush Nanayakkara</span>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-paper">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">LinkedIn</a>
          <a href={profile.cv} target="_blank" rel="noreferrer" className="hover:text-paper">CV</a>
        </div>
        <button onClick={() => scrollToId("top")} className="hover:text-paper">Back to top ↑</button>
      </div>
      <motion.div
        className="gutter -mb-[2%] text-white/10"
        initial={{ y: "60%" }}
        whileInView={{ y: "18%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
      >
        <FitText text="NANAYAKKARA" className="font-display font-semibold tracking-tightest" />
      </motion.div>
    </footer>
  );
}
