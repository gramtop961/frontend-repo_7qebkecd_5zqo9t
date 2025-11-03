import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Let’s work together</h2>
          <p className="mt-3 text-slate-300">
            Have a project in mind or just want to say hi? I’m always open to new collaborations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:translate-y-[-2px] hover:bg-emerald-400"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://github.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:translate-y-[-2px] hover:border-white/25 hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:translate-y-[-2px] hover:border-white/25 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} [Your Name]. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
