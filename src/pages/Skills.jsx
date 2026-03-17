import SkillsGrid from "../component/SkillsGrid";
import { motion } from "framer-motion";

function Skill() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 md:py-16 overflow-x-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(116,141,123,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(116,141,123,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-full relative z-10">
        <SkillsGrid />
      </div>
    </section>
  );
}

export default Skill;