"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { projects } from "@/lib/data";
import { fadeUpSlow } from "@/lib/animations";
import { ArrowUpRight, Users, Shield, Wrench } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  wrench: <Wrench className="w-5 h-5" />,
};

export default function Projects() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          custom={0}
          variants={fadeUpSlow}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-white/50 text-xs font-medium mb-6">
            Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 text-white/40 max-w-xl">
            A selection of projects spanning AI, computer vision, environmental
            monitoring, and civic technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              custom={i + 1}
              variants={fadeUpSlow}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="group h-full p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all cursor-pointer flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white/80"
                      style={{
                        background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}11)`,
                        border: `1px solid ${project.accent}33`,
                      }}
                    >
                      {iconMap[project.icon]}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <span className="text-xs font-medium mb-2" style={{ color: `${project.accent}cc` }}>
                    {project.category}
                  </span>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-white/40 text-xs border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-white/40 text-xs border border-white/[0.06]">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={4}
          variants={fadeUpSlow}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-4"
        >
          <Link href={`/projects/${projects[0].slug}`}>
            <div className="group p-8 rounded-2xl border border-white/[0.06] bg-gradient-to-r from-white/[0.03] to-transparent hover:border-white/[0.1] transition-all cursor-pointer">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex-1">
                  <span className="text-xs font-medium text-blue-400 mb-2 block">
                    Featured Project
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {projects[0].title}
                  </h3>
                  <p className="text-white/40 max-w-xl text-sm leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-white/70 transition-colors text-sm font-medium flex-shrink-0">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
