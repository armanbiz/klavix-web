import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollTypewriter } from '../../hooks/useScrollTypewriter';

const projects = [
  {
    title: 'SportsHub',
    url: 'https://sportshub.fyi/',
    description:
      'A platform to compare gyms and sports facilities in Prague based on price, location and amenities. Built for speed and real-time data.',
    tags: ['Website', 'Sports Media', 'Real-Time Data'],
    thumbnail: 'https://sportshub.fyi/image.png',
  },
  {
    title: 'NeoTime Invest',
    url: 'https://www.neotimeinvest.com/',
    description:
      'A professional investment platform showcasing financial services with a clean, trust-building design and seamless user experience.',
    tags: ['Website', 'Finance', 'Lead Generation'],
    thumbnail: 'https://neotimeinvest.com/og-image.jpg',
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : index % 2 === 0
          ? 'opacity-0 -translate-x-10'
          : 'opacity-0 translate-x-10'
      }`}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-56 sm:h-64">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Live site button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-500"
        >
          Visit Site <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="tech-heading text-xl text-white">{project.title}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-blue-400 hover:text-blue-300 transition-colors"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [text, sectionRef] = useScrollTypewriter({
    texts: ['Completed Projects'],
    speed: 50,
  });

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 ref={sectionRef} className="tech-heading text-2xl sm:text-3xl md:text-4xl mb-4">
            {text[0]}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of websites and web applications we've designed and developed for our clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
