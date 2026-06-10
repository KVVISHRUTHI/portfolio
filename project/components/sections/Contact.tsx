"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { siteConfig } from "@/lib/data";
import { fadeUp } from "@/lib/animations";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/KVVISHRUTHI",
    href: siteConfig.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vishruthikv",
    href: siteConfig.linkedin,
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
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
            Contact
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-white/40 max-w-xl">
            I&apos;m open to internships, collaborations, and full-time opportunities.
            Drop me a message and I&apos;ll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <link.icon className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="mt-6 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/60 text-sm font-medium">
                  Available for work
                </span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                Currently looking for internship and full-time opportunities.
                Response time is typically within 24 hours.
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <div className="h-full flex items-center justify-center p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Message sent!
                  </h3>
                  <p className="text-white/40 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-white/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
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
