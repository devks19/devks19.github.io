import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import project1 from "../assets/project1.png";

const projects = [
  {
    id: 1,
    name: "Annotate (Monolithic)",
    description:
      "The Saas application for Video Creators and Influencer. The client dealing platform for Creators and Client.",
    image: project1,
    technologies: ["Spring Boot", "React", "PostgreSQL", "Hibernate", "Docker", "Tailwind", "Spring Security"],
    github: "https://github.com/devks19/Annotate",
    live: "#",
  },
  {
    id: 2,
    name: "Annotate (Microservice)",
    description:
      "A scalable, production-ready SaaS application for video review and collaboration, emphasizing distributed system design, secure services, and automated deployment pipelines.",
    image: project1,
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker", "AWS"+" (ec2, vpc, s3)", "AWS S3", "Spring Cloud", "GitHub Actions", "RabbitMQ", ],
    github: "https://github.com/devks19/annotate-microservice",
    live: "#",
  },
  // {
  //   id: 3,
  //   name: "Microservices Gateway",
  //   description:
  //     "Cloud-native API gateway built with Spring Cloud, featuring service discovery, load balancing, circuit breakers, and centralized authentication via OAuth2.",
  //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  //   technologies: ["Spring Cloud", "Kubernetes", "AWS", "OAuth2", "Docker"],
  //   github: "https://github.com/kanakrajsaraf",
  //   live: "#",
  // },
  // {
  //   id: 4,
  //   name: "Social Media Analytics",
  //   description:
  //     "Comprehensive analytics dashboard for social media performance tracking with data visualization, custom report generation, and automated scheduling using Spring Batch.",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  //   technologies: ["React", "Spring Batch", "PostgreSQL", "AWS S3", "Chart.js"],
  //   github: "https://github.com/kanakrajsaraf",
  //   live: "#",
  // },
  // {
  //   id: 5,
  //   name: "Real-time Chat App",
  //   description:
  //     "Scalable real-time messaging application supporting group chats, file sharing, and push notifications, backed by STOMP WebSocket protocol and a React frontend.",
  //   image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
  //   technologies: ["React", "Spring Boot", "STOMP", "Redis", "PostgreSQL"],
  //   github: "https://github.com/kanakrajsaraf",
  //   live: "#",
  // },
  // {
  //   id: 6,
  //   name: "DevOps CI/CD Pipeline",
  //   description:
  //     "Automated deployment pipeline with Jenkins, Docker, and Kubernetes. Includes automated testing, blue-green deployments, and monitoring via Prometheus and Grafana.",
  //   image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
  //   technologies: ["Jenkins", "Docker", "Kubernetes", "AWS", "Prometheus"],
  //   github: "https://github.com/kanakrajsaraf",
  //   live: "#",
  // },
];

const techColors = {
  "Spring Boot": "bg-green-500/15 text-green-400 border-green-500/30",
  React: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  PostgreSQL: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Stripe: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Docker: "bg-sky-500/15 text-sky-400 border-sky-500/30",
  WebSocket: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  Redis: "bg-red-500/15 text-red-400 border-red-500/30",
  MySQL: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  Kubernetes: "bg-blue-600/15 text-blue-300 border-blue-600/30",
  AWS: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  OAuth2: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  "Spring Cloud": "bg-green-600/15 text-green-300 border-green-600/30",
  "AWS S3": "bg-amber-600/15 text-amber-300 border-amber-600/30",
  "Chart.js": "bg-pink-500/15 text-pink-400 border-pink-500/30",
  STOMP: "bg-teal-500/15 text-teal-400 border-teal-500/30",
  Jenkins: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  Prometheus: "bg-orange-600/15 text-orange-300 border-orange-600/30",
  "Spring Batch": "bg-green-700/15 text-green-200 border-green-700/30",
  Tailwind: "bg-blue-600/15 text-blue-300 border-blue-600/30",
  "Spring Security": "bg-red-500/15 text-red-400 border-red-500/30",
  RabbitMQ: "bg-orange-600/15 text-orange-300 border-orange-600/30",
};

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const currentProject = projects[currentIndex];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center py-24 md:py-16 overflow-x-hidden">
      <div className="w-full px-6 md:px-12 max-w-6xl mx-auto cursor-default">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-[#748d7b] text-sm font-semibold tracking-widest uppercase mb-2">What I&apos;ve Built</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">Projects</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#748d7b] to-transparent rounded" />
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/10 p-6 md:p-8 bg-white/5 backdrop-blur-sm shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">

            {/* Left – Image with navigation */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-xl shadow-xl h-64 md:h-72 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentProject.id}
                    src={currentProject.image}
                    alt={currentProject.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    loading="lazy"
                  />
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                {/* Navigation buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevProject}
                    aria-label="Previous project"
                    className="bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextProject}
                    aria-label="Next project"
                    className="bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Counter */}
              <p className="text-center mt-3 text-gray-500 text-sm font-medium">
                {currentIndex + 1} / {projects.length}
              </p>
            </div>

            {/* Right – Details */}
            <div className="w-full md:w-1/2 space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {currentProject.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-[#748d7b] mb-4" />
                    <p className="text-gray-300 text-base leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                          techColors[tech] ?? "bg-white/10 text-gray-300 border-white/20"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#748d7b] hover:bg-[#8faa9b] text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#748d7b]/30"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-white/20 hover:border-[#748d7b]/60 text-gray-300 hover:text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:bg-white/5"
                    >
                      Source Code
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                animate={{
                  width: index === currentIndex ? 28 : 8,
                  backgroundColor: index === currentIndex ? "#748d7b" : "rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;