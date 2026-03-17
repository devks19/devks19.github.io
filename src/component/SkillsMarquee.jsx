import { motion } from "framer-motion";
import SkillsSlider from "./SkillsSlider";
import SkillItem from "./SkillItem";

const skills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Spring", icon: "/icons/spring.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "PostgreSQL", icon: "/icons/postgres.svg" },
];

// duplicate for seamless loop
const loopSkills = [...skills, ...skills];

export default function SkillsMarquee() {
  return (
    <div className="relative overflow-hidden">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-20 bg-gradient-to-r from-[#242424] to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-20 bg-gradient-to-l from-[#242424] to-transparent" />

      {/* SCROLL TRACK */}
      <motion.div
        className="flex gap-16 py-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopSkills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}
