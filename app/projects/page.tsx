import React from 'react';
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';

interface Project {
  title: string;
  period: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Atomix UI",
      period: "Oct 2024 - Nov 2024",
      description: "Redefined UI building for developers. Quickly add components, themes, and responsive layouts to your app at any scale",
      image: "/projects/atomix.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      links: {
        github: "https://github.com/yourusername/atomix-ui",
        live: "https://atomix-ui.com"
      }
    },
    {
      title: "Quick Bid",
      period: "Oct 2024 - Oct 2024",
      description: "A fast, intuitive platform where users can bid, win, and save on top products and services in real-time.",
      image: "/projects/quickbid.png",
      technologies: ["Next.js", "TypeScript", "Docker", "Prisma", "Supabase"],
      links: {
        github: "https://github.com/yourusername/quick-bid",
        live: "https://quickbid.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Portfolio Header */}
        <div className="text-center mb-12">
          <div className="text-sm text-neutral-400 mb-2">Portfolio Showcase</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Building Digital Solutions</h1>
          <p className="text-xl text-neutral-400">
            Transforming ideas into elegant digital solutions that make a difference.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:bg-neutral-900/80 transition-all">
              {/* Project Image */}
              <div className="aspect-[16/9] overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                         className="p-2 rounded-full hover:bg-neutral-800">
                        <IconBrandGithub className="h-5 w-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                         className="p-2 rounded-full hover:bg-neutral-800">
                        <IconExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-sm text-neutral-400">{project.period}</div>
                <p className="text-neutral-300">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-neutral-800 text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-colors">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
