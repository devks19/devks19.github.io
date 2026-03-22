import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import tech1 from "../assets/tech1.png";
import tech2 from "../assets/tech2.png";
import tech3 from "../assets/tech3.png";

const images = [tech1, tech2, tech3];

const stats = [
  // { value: "3+", label: "Years Exp." },
  { value: "2+", label: "Projects" },
  { value: "10+", label: "Technologies" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/devks19",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/devks19",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/devks19/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M9.5 3L3 9.5c-1.5 1.5-1.5 3.9 0 5.4l3.6 3.6c1.5 1.5 3.9 1.5 5.4 0L21 9.5M14 3h4v4" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:kssaraf19@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  
];

function About() {
  const fullText =
    "Strong expertise in Java, Spring Boot, RESTful APIs, React.js, relational databases and foundational DevOps practices. Experienced in designing backend services, implementing authentication and business logic, and developing responsive front end interfaces with a focus on performance, scalability, and maintainability. Open to entry-level and full-time software engineering opportunities where strong ownership, learning, and execution are expected.";

  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (charIndex < fullText.length) {
      const t = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(t);
    }
  }, [charIndex, hasStarted, fullText]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-x-hidden py-24 md:py-16"
      style={{ cursor: "default" }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(116,141,123,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(116,141,123,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content — uniform padded wrapper */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-6xl mx-auto">

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-[#748d7b] text-xs font-semibold tracking-widest uppercase mb-1">Who I Am</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-[#748d7b] to-transparent rounded" />
        </motion.div>

        {/* Two-column on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">

          {/* Left – Text */}
          <div className="space-y-4">
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5"
            >
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {displayedText}
                <span className="inline-block w-0.5 h-4 bg-[#748d7b] ml-0.5 animate-pulse" />
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-2 sm:gap-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 bg-white/5 border border-white/10 rounded-xl hover:border-[#748d7b]/40 transition-colors duration-300"
                >
                  <p className="text-xl sm:text-2xl font-bold text-[#748d7b]">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-2"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-[#748d7b]/50 hover:bg-[#748d7b]/10 transition-all duration-300 text-xs font-medium"
                >
                  {s.icon}
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right – Image grid (2×2) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-2 sm:gap-2"
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl border border-white/10 shadow-lg aspect-square"
              >
                <img
                  src={src}
                  alt={`About ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;