import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
    accent: "text-blue-400",
    skills: [
      { name: "Java", icon: "☕" },
      // { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "Cpp", icon: "C++" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    label: "Frameworks",
    color: "from-green-500/20 to-green-600/10",
    border: "border-green-500/30",
    accent: "text-green-400",
    skills: [
      { name: "Spring Boot", icon: "🍃" },
      { name: "React", icon: "⚛️" },
      // { name: "Node.js", icon: "🟢" },
      { name: "Spring MVC", icon: "🔧" },
      { name: "Hibernate", icon: "🗂️" },
    ],
  },
  {
    label: "DevOps & Cloud",
    color: "from-sky-500/20 to-sky-600/10",
    border: "border-sky-500/30",
    accent: "text-sky-400",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "AWS", icon: "☁️" },
      { name: "Jenkins", icon: "🔁" },
      { name: "Linux", icon: "🐧" },
    ],
  },
  {
    label: "Databases",
    color: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "💾" },
      // { name: "Redis", icon: "⚡" },
      // { name: "MongoDB", icon: "🍃" },
      // { name: "Elasticsearch", icon: "🔍" },
    ],
  },
  {
    label: "Tools",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/30",
    accent: "text-purple-400",
    skills: [
      { name: "Git", icon: "🌿" },
      { name: "GitHub", icon: "🐙" },
      { name: "Maven", icon: "📦" },
      { name: "Swagger", icon: "📄" },
      { name: "Postman", icon: "📮" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function SkillsGrid() {
  return (
    <div className="w-full px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-[#748d7b] text-sm font-semibold tracking-widest uppercase mb-2">My Arsenal</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          Skills & Technologies
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#748d7b] to-transparent rounded" />
      </motion.div>

      <div className="space-y-5">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            className={`rounded-xl border ${category.border} bg-gradient-to-r ${category.color} p-4`}
          >
            <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${category.accent}`}>
              {category.label}
            </p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-lg cursor-default transition-colors duration-200 group"
                >
                  <span className="text-base leading-none select-none">{skill.icon}</span>
                  <span className="text-sm text-gray-300 group-hover:text-white font-medium transition-colors duration-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
