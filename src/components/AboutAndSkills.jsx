import React from 'react';
import { Code, Cpu, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: <Code className="h-4 w-4" /> },
  { name: 'Three.js', icon: <Layers className="h-4 w-4" /> },
  { name: 'Spline', icon: <Zap className="h-4 w-4" /> },
  { name: 'WebGL', icon: <Cpu className="h-4 w-4" /> },
  { name: 'Tailwind CSS', icon: <Code className="h-4 w-4" /> },
  { name: 'Framer Motion', icon: <Zap className="h-4 w-4" /> },
];

const AboutAndSkills = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="font-display text-3xl font-semibold md:text-4xl">About Me</h2>
            <p className="mt-4 text-slate-300">
              I’m a developer focused on building sleek, responsive web apps with a love for
              3D and motion. I value clean code, performance, and small delightful details.
              This template is set up so you can quickly replace content with your own.
            </p>
            <div className="mt-8" id="skills">
              <h3 className="text-xl font-medium">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm"
                  >
                    {s.icon}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-[1rem] bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.25),transparent_60%)]">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-white/10 ring-1 ring-white/10" />
                  <h3 className="font-display text-xl font-semibold">[Your Name]</h3>
                  <p className="text-slate-300">Web & 3D Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndSkills;
