"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { heroFloat } from "@/lib/animations";

const stats = [
  { value: "9.4", label: "CGPA" },
  { value: "3", label: "Projects" },
  { value: "2", label: "Certifications" },
  { value: "Top 20", label: "Hackathon" },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={heroFloat}
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-white/60 text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={heroFloat}
            initial="initial"
            animate="animate"
            className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Vishruthi K V
            </span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            custom={2}
            variants={heroFloat}
            initial="initial"
            animate="animate"
            className="text-xl sm:text-2xl text-white/40 font-light mb-6"
          >
            Full Stack Developer &mdash; building scalable backends,
            <br className="hidden sm:block" /> intelligent systems, and clean user experiences.
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            variants={heroFloat}
            initial="initial"
            animate="animate"
            className="text-white/40 text-base max-w-2xl leading-relaxed mb-10"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={heroFloat}
            initial="initial"
            animate="animate"
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            <button
              onClick={() => handleScroll("projects")}
              className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-white/90 transition-all hover:gap-3 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-2 px-6 py-3 bg-white/[0.06] text-white/80 text-sm font-medium rounded-xl border border-white/[0.1] hover:bg-white/[0.1] transition-all"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-white/[0.04] text-white/60 text-sm font-medium rounded-xl border border-white/[0.06] hover:bg-white/[0.08] transition-all"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            custom={5}
            variants={heroFloat}
            initial="initial"
            animate="animate"
            className="flex items-center gap-4 mb-20"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <span className="text-white/20">·</span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span className="text-white/20">·</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={6}
            variants={heroFloat}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0a0a0a] px-6 py-6 hover:bg-white/[0.03] transition-colors"
              >
                <div className="text-2xl font-semibold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
