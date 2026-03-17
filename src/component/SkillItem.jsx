import {motion} from "framer-motion";

function SkillItem({ skill }) {
    return (
      <motion.div
        className="relative flex items-center justify-center"
        whileHover={{ scale: 1.15 }}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="
            w-20 h-20 
            md:w-24 md:h-24 
            object-contain 
            opacity-60
            transition-all
          "
        />
      </motion.div>
    );
  }
 
export default SkillItem