"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { siteConfig } from "@/lib/data";
import { fadeUp } from "@/lib/animations";
import { MapPin, Calendar, GraduationCap, Github, Linkedin } from "lucide-react";

const cards = [
  { icon: MapPin, label: "Location", value: "Chennai, India" },
  { icon: Calendar, label: "Availability", value: "Open to Work" },
  { icon: GraduationCap, label: "Education", value: "B.E. ECE — CGPA 9.4" },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-white/50 text-xs font-medium mb-6"
            >
              About Me
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-4xl sm:text-5xl font-semibold text-white leading-tight tracking-tight mb-6"
            >
              Crafting software that
              <br />
              <span className="text-white/40">makes a difference.</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-white/50 leading-relaxed mb-6 text-base"
            >
              {siteConfig.description}
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-white/50 leading-relaxed mb-8 text-base"
            >
              I enjoy working across the full stack — from designing robust
              backend APIs and database schemas to building responsive,
              polished frontends. My work spans AI-powered systems, civic
              tech, and environmental monitoring.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-4"
            >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] text-white/70 text-sm font-medium rounded-xl border border-white/[0.1] hover:bg-white/[0.1] transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] text-white/70 text-sm font-medium rounded-xl border border-white/[0.1] hover:bg-white/[0.1] transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: info cards */}
          <div className="grid grid-cols-1 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.label}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <card.icon className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">
                    {card.label}
                  </p>
                  <p className="text-white font-medium text-sm">{card.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-2 p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/40 flex items-center justify-center flex-shrink-0 text-xl font-bold text-white/80">
                  VK
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    {siteConfig.name}
                  </p>
                  <p className="text-white/40 text-xs leading-relaxed">
                    Full Stack Developer · AI Enthusiast · Open Source Contributor
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Java", "React", "Python", "Spring Boot"].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/[0.06] text-white/50 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
