import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const demoProjects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A performant hero with Spline/Three.js, smooth animations, and responsive design.',
    image:
      'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Three.js', 'Spline'],
    link: '#',
  },
  {
    title: 'Product Visualizer',
    description: 'Real-time material switching and orbit controls with a clean, branded UI.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    tags: ['WebGL', 'UI/UX', 'Animation'],
    link: '#',
  },
  {
    title: 'Portfolio System',
    description: 'A modular portfolio system with content-driven sections and MDX support.',
    image:
      'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Design', 'Performance'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Projects</h2>
            <p className="mt-2 text-slate-300">A selection of recent work and experiments.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-95"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-slate-300 opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
