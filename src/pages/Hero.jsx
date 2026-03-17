import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  "Java Full Stack Developer",
  "Spring Boot Engineer",
  "Cloud & DevOps Enthusiast",
  "React Developer",
];

const techLogos = [
  { id: 1, name: "React", color: "#61DAFB", x: "5%", y: "10%", size: 36, delay: 0 },
  { id: 2, name: "Spring", color: "#6DB33F", x: "88%", y: "15%", size: 44, delay: 0.5 },
  { id: 3, name: "Docker", color: "#2496ED", x: "4%", y: "55%", size: 38, delay: 1 },
  { id: 4, name: "K8s", color: "#326CE5", x: "90%", y: "60%", size: 36, delay: 1.8 },
  { id: 5, name: "AWS", color: "#FF9900", x: "82%", y: "38%", size: 40, delay: 1.7 },
  { id: 6, name: "PostgreSQL", color: "#336791", x: "7%", y: "80%", size: 38, delay: 1.2 },
];

const getLogoIcon = (name) => {
  switch (name) {
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case "Spring":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21z" />
        </svg>
      );
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185" />
        </svg>
      );
    case "K8s":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7.5 3.75v7.5L12 19.5l-7.5-3.75v-7.5L12 4.5z" />
          <path d="M12 7l-4 2.5v5L12 17l4-2.5v-5L12 7z" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M17.128 0c-.34.004-1.173.045-2.428.558-2.472 1.013-3.401 2.734-3.401 5.119v.5c-1.243-.004-2.229.375-2.861.848-.858.642-1.303 1.567-1.303 2.647 0 .493.084.968.246 1.41-1.74.848-2.96 2.571-2.96 4.582 0 2.785 2.271 5.046 5.07 5.046.938 0 1.82-.253 2.578-.692.768.442 1.657.692 2.603.692 2.799 0 5.07-2.261 5.07-5.046 0-2.011-1.22-3.734-2.96-4.582.162-.442.246-.917.246-1.41 0-1.08-.445-2.005-1.303-2.647-.632-.473-1.618-.852-2.861-.848v-.5c0-1.894.534-3.096 2.178-3.848.747-.341 1.336-.41 1.635-.424.148-.007.229.007.264.007z" />
        </svg>
      );
    case "AWS":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.591-.894-.591-1.533 0-.678.239-1.226.726-1.644.487-.417 1.133-.626 1.955-.626.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.031-.375-1.277-.255-.246-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.152c.279-.144.614-.263 1.005-.368A4.841 4.841 0 017.258 4.144c1.007 0 1.74.223 2.198.671.455.448.687 1.133.687 2.062v2.72z" />
        </svg>
      );
    default:
      return null;
  }
};

function Hero() {
  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center overflow-hidden"
      style={{ cursor: "default" }}
    >
      {/* Animated tech logos – only show on md+ screens to avoid clutter */}
      <div className="hidden md:block">
        {techLogos.map((logo) => (
          <motion.div
            key={logo.id}
            className="absolute pointer-events-none"
            style={{
              left: logo.x,
              top: logo.y,
              width: logo.size,
              height: logo.size,
              color: logo.color,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: logo.delay,
              ease: "easeInOut",
            }}
          >
            {getLogoIcon(logo.name)}
          </motion.div>
        ))}
      </div>

      {/* Main content — left-aligned, uniform padded wrapper */}
      <div className="w-full px-6 md:px-12 max-w-6xl mx-auto mt-20 md:mt-0">
        <div className="space-y-4 sm:space-y-5">

          {/* Eyebrow label */}
          {/* <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#748d7b] text-xs sm:text-sm font-semibold tracking-widest uppercase"
          >
            Portfolio
          </motion.p> */}

          {/* Looking for a {role}? */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-snug">
              Looking for a{" "}
              <span className="relative inline-block font-semibold text-[#8faa9b]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="inline-block"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              ?
            </h2>
          </motion.div>

          {/* "here he is!" */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500 italic">
              here he is!
            </p>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              KANAK RAJ{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#748d7b] to-[#a8c4b0]">
                SARAF
              </span>
            </h1>
          </motion.div>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "min(100%, 28rem)" }}
            transition={{ duration: 1, delay: 1.1 }}
            className="h-px bg-gradient-to-r from-[#748d7b] via-[#748d7b]/50 to-transparent"
          />

          {/* CTA Buttons — stack on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-3 pt-1"
          >
            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-3 bg-[#748d7b] hover:bg-[#8faa9b] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#748d7b]/30 text-sm w-full sm:w-auto text-center"
            >
              View My Work →
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 border border-white/20 hover:border-[#748d7b] text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase font-light">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center pt-1"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-[#748d7b]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;