"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle,
  Users,
  Shield,
  Wrench,
} from "lucide-react";
import { projects } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  color: string;
  accent: string;
  icon: string;
  github: string;
  highlights: string[];
  category: string;
}

const iconMap: Record<string, React.ReactNode> = {
  users: <Users className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  wrench: <Wrench className="w-6 h-6" />,
};

export default function ProjectDetail({ project }: { project: Project }) {
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at 60% 50%, ${project.accent}18 0%, transparent 70%)`,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 mb-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white/80"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}11)`,
                    border: `1px solid ${project.accent}33`,
                  }}
                >
                  {iconMap[project.icon]}
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: `${project.accent}cc` }}
                >
                  {project.category}
                </span>
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4"
              >
                {project.title}
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-xl text-white/40 max-w-2xl"
              >
                {project.tagline}
              </motion.p>
            </div>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 flex-shrink-0"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] text-white/70 text-sm font-medium rounded-xl border border-white/[0.1] hover:bg-white/[0.1] transition-all"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                Overview
              </h2>
              <p className="text-white/70 leading-relaxed text-base">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">
                Key Highlights
              </h2>
              <div className="space-y-4">
                {project.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                  >
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: `${project.accent}cc` }}
                    />
                    <p className="text-white/60 text-sm leading-relaxed">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.06] text-white/70 text-xs font-medium border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                Other Projects
              </h3>
              <div className="space-y-3">
                {others.map((other) => (
                  <Link key={other.slug} href={`/projects/${other.slug}`}>
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all group cursor-pointer">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white/60"
                        style={{
                          background: `linear-gradient(135deg, ${other.accent}22, ${other.accent}11)`,
                          border: `1px solid ${other.accent}33`,
                        }}
                      >
                        {iconMap[other.icon]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors truncate">
                          {other.title}
                        </p>
                        <p className="text-white/30 text-xs truncate">
                          {other.category}
                        </p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
