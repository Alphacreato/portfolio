import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./ThemeContext";
import LoadingScreen from "./components/LoadingScreen";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <ThemeProvider>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}
