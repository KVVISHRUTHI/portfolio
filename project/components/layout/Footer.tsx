"use client";

import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

export default function Footer() {
  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-black" />
              </div>
              <span className="font-semibold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about building scalable systems and
              intelligent applications.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white/60 text-xs font-semibold uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/40 hover:text-white/80 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white/60 text-xs font-semibold uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  github.com/KVVISHRUTHI
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/vishruthikv
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white/30 hover:text-white/70 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
