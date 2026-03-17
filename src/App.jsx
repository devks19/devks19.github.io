import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./component/ScrollToTop";
import Navbar from "./component/Navbar";
import { useWheelRouter } from "./hooks/useWheelRouter";
import { useSwipeRouter } from "./hooks/useSwipeRouter";

function App() {
  useEffect(() => {
    const bg = document.getElementById("bg-layer");
    if (!bg) return;

    const move = (e) => {
      bg.style.setProperty("--mx", `${e.clientX}px`);
      bg.style.setProperty("--my", `${e.clientY}px`);
    };

    const leave = () => {
      bg.style.setProperty("--mx", `-200px`);
      bg.style.setProperty("--my", `-200px`);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  useWheelRouter();
  useSwipeRouter();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
