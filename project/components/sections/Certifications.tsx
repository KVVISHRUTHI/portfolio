"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { certifications, achievements } from "@/lib/data";
import { fadeUp } from "@/lib/animations";
import { Award, Cloud, Trophy, Zap } from "lucide-react";

const certIconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
};

const achIconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
};

export default function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Certifications */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-white/50 text-xs font-medium mb-6">
            Certifications
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Credentials
          </h2>
          <p className="mt-4 text-white/40 max-w-xl">
            Industry-recognized certifications validating expertise in Java
            development and cloud-based machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white/80"
                  style={{
                    background: `linear-gradient(135deg, ${cert.accent}22, ${cert.accent}11)`,
                    border: `1px solid ${cert.accent}33`,
                  }}
                >
                  {certIconMap[cert.icon]}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-white/30 text-xs font-medium uppercase tracking-wider block mb-1">
                        {cert.issuer}
                      </span>
                      <h3 className="text-white font-semibold text-base leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                    {cert.score && (
                      <div className="flex-shrink-0 text-right">
                        <div className="text-xl font-bold text-white">
                          {cert.score}
                        </div>
                        <div className="text-white/30 text-xs">Score</div>
                      </div>
                    )}
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-white/50 text-xs font-medium mb-6">
            Achievements
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Milestones
          </h2>
          <p className="mt-4 text-white/40 max-w-xl">
            Competitive programming achievements and hackathon recognition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              custom={i + 4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${ach.color} text-white`}
                >
                  {achIconMap[ach.icon]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/[0.08] text-white/80">
                      {ach.rank}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-base leading-snug mb-1">
                    {ach.title}
                  </h3>
                  <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-2">
                    {ach.organization}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
