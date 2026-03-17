import { useState } from "react";
import { motion } from "framer-motion";

const ITEM_WIDTH = 100; // width + gap

export default function SkillsSlider() {
  const [active, setActive] = useState(2); // start centered

  const skills = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Spring", icon: "/icons/spring.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Kubernetes", icon: "/icons/k8s.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
  ];
  

  const next = () =>
    setActive((prev) => (prev + 1) % skills.length);

  const prev = () =>
    setActive((prev) =>
      (prev - 1 + skills.length) % skills.length
    );

  return (
    <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden">

      {/* SLIDER */}
      <div className="relative w-full max-w-4xl overflow-hidden">

      <div className="
  pointer-events-none
  absolute left-1/2 top-1/2
  -translate-x-1/2 -translate-y-1/2
  w-32 h-32
  rounded-full
  border border-white/20
" />


        <motion.div
          className="flex items-center gap-8"
          animate={{
            x: `calc(50% - ${active * ITEM_WIDTH}px)`,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {skills.map((skill, index) => {
            const distance = Math.abs(index - active);

            return (
              <motion.div
                key={skill.name}
                className="flex items-center justify-center"
                animate={{
                  scale: distance === 0 ? 1.3 : 0.9,
                  opacity: distance === 0 ? 1 : 0.35,
                  filter: distance === 0 ? "blur(0px)" : "blur(4px)",
                }}
                transition={{ duration: 0.3 }}
                style={{ width: ITEM_WIDTH }}
              >
                <div className="flex flex-col items-center gap-2">
  <img
    src={skill.icon}
    className="w-20 h-20 object-contain"
  />
  {distance === 0 && (
    <span className="text-sm text-white/80">
      {skill.name}
    </span>
  )}
</div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* CONTROLS */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={prev}
          className="px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white/10"
        >
          ←
        </button>
        <button
          onClick={next}
          className="px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white/10"
        >
          →
        </button>
      </div>
    </section>
  );
}
