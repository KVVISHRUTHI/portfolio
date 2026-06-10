"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { education } from "@/lib/data";
import { fadeUp } from "@/lib/animations";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Timeline() {
  const { ref, inView } = useInView();

  return (
    <section
      id="education"
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
            Education
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Academic journey
          </h2>
          <p className="mt-4 text-white/40 max-w-xl">
            Building a strong foundation in engineering, computer science, and
            applied problem-solving.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

          <div className="space-y-6">
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] items-center justify-center">
                  {item.type === "university" ? (
                    <GraduationCap className="w-5 h-5 text-white/50" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-white/50" />
                  )}
                </div>

                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="md:hidden w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center">
                          {item.type === "university" ? (
                            <GraduationCap className="w-4 h-4 text-white/50" />
                          ) : (
                            <BookOpen className="w-4 h-4 text-white/50" />
                          )}
                        </div>
                        <span className="text-white/30 text-xs font-medium uppercase tracking-wider">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {item.institution}
                      </h3>
                      <p className="text-white/50 text-sm">
                        {item.degree} &mdash; {item.field}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-bold text-white">
                        {item.score}
                      </div>
                      <div className="text-white/30 text-xs uppercase tracking-wider">
                        {item.scoreLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
