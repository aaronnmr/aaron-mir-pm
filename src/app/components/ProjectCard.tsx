import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string | null;
    tags: string[];
    metrics: string[];
    link: string;
    newTab?: boolean;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <a
        href={project.link}
        target={project.newTab ? "_blank" : undefined}
        rel={project.newTab ? "noopener noreferrer" : undefined}
        className="grid md:grid-cols-2 gap-8 items-start"
      >
        {/* Image Section */}
        {/* 🎯 TODO: Replace the placeholder with your actual project image */}
        <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Add project image here</p>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="group-hover:text-muted-foreground transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="space-y-2 pt-2">
            {project.metrics.map((metric, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span className="text-foreground">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
