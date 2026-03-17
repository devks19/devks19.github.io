import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/devks19",
    description: "@devks19",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/devks19",
    description: "Kanak Raj Saraf",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:kssaraf19@gmail.com",
    description: "kssaraf19@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-24 md:py-16 overflow-x-hidden">
      {/* Background radial */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(116,141,123,0.4) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, rgba(116,141,123,0.3) 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-[#748d7b] text-sm font-semibold tracking-widest uppercase mb-2">Let's Connect</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">Get in Touch</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#748d7b] to-transparent rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left – Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-7"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-green-400 text-sm font-semibold">Open to Opportunities</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold text-white">Let&apos;s build something great together.</h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open. I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-lg">📍</span>
              <span className="text-sm">India · Available for Remote / On-Site</span>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#748d7b]/50 hover:bg-[#748d7b]/10 transition-all duration-300 group"
                >
                  <span className="text-[#748d7b] group-hover:scale-110 transition-transform duration-200">
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-white text-sm font-semibold">{s.label}</p>
                    <p className="text-gray-500 text-xs">{s.description}</p>
                  </div>
                  <span className="ml-auto text-gray-600 group-hover:text-[#748d7b] transition-colors duration-200 text-sm">↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-10 bg-white/5 border border-[#748d7b]/40 rounded-2xl"
              >
                <span className="text-5xl mb-4">🎉</span>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4 p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Kanak Raj Saraf"
                    className={`w-full bg-white/5 border ${
                      errors.name ? "border-red-500/60" : "border-white/15"
                    } rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm
                      focus:outline-none focus:border-[#748d7b] focus:ring-1 focus:ring-[#748d7b]/40 transition-colors duration-200`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full bg-white/5 border ${
                      errors.email ? "border-red-500/60" : "border-white/15"
                    } rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm
                      focus:outline-none focus:border-[#748d7b] focus:ring-1 focus:ring-[#748d7b]/40 transition-colors duration-200`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`w-full bg-white/5 border ${
                      errors.message ? "border-red-500/60" : "border-white/15"
                    } rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm resize-none
                      focus:outline-none focus:border-[#748d7b] focus:ring-1 focus:ring-[#748d7b]/40 transition-colors duration-200`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#748d7b] hover:bg-[#8faa9b] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#748d7b]/30 flex items-center justify-center gap-2 text-sm"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;