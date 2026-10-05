import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { useSmoothScroll } from "./lib/hooks";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Archive from "./components/Archive";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Process from "./components/Process";
import Marquee from "./components/Marquee";
import Contact, { Footer } from "./components/Contact";

export default function App() {
  const [ready, setReady] = useState(false);
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain">
        <Preloader onDone={() => setReady(true)} />
        <Cursor />
        <Nav ready={ready} />
        <main>
          <Hero ready={ready} />
          <About />
          <Work />
          <Archive />
          <Experience />
          <Certifications />
          <Services />
          <Process />
          <Marquee />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
