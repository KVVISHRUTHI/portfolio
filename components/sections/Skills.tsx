"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { skills } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const categoryColors: Record<string, string> = {
  Languages: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Frameworks: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Databases: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "Developer Tools": "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  Libraries: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  "Core CS": "bg-sky-500/10 text-sky-300 border-sky-500/20",
};

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-[#0d0d0d]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-white/50 text-xs font-medium mb-6">
            Technical Skills
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Tools of the trade
          </h2>
          <p className="mt-4 text-white/40 max-w-xl">
            A curated stack I rely on to build fast, reliable, and scalable
            software — from backend systems to data pipelines and frontends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              custom={ci + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-lg border text-xs font-medium ${
                      categoryColors[category] ??
                      "bg-white/[0.06] text-white/60 border-white/[0.08]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={8}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01]"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.values(skills)
              .flat()
              .map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.02 }}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-white/50 text-xs border border-white/[0.06] hover:text-white/80 hover:bg-white/[0.08] transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
