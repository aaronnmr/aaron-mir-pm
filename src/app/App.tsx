import { Mail, Linkedin, Github } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { portfolioData as portfolio } from '../data';

// Las imágenes se importan dinámicamente según la ruta definida en data.ts
const imageModules = import.meta.glob('../imports/*.{png,jpg,jpeg,webp,svg}', { eager: true, as: 'url' });

function resolveImage(path: string | null): string | null {
  if (!path) return null;
  const key = path.replace('./', '../');
  return (imageModules[key] as string) ?? null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-muted rounded-full">
              <span className="text-muted-foreground">{portfolio.title}</span>
            </div>
            <h1 className="text-4xl md:text-6xl tracking-tight">
              {portfolio.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {portfolio.tagline}
            </p>
            <div className="flex gap-4 pt-4">
  
    href={`mailto:${portfolio.contact.email}`}
    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
  >
    <Mail className="w-4 h-4" />
    Get in touch
  </a>
  
    href={portfolio.contact.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
  >
    <Linkedin className="w-4 h-4" />
    LinkedIn
  </a>
  {portfolio.contact.cv && (
    
      href={portfolio.contact.cv}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
    >
      <ExternalLink className="w-4 h-4" />
      CV
    </a>
  )}
</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="mb-8">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {portfolio.about}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="mb-12">Selected Work</h2>
          <div className="space-y-16">
            {portfolio.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={{ ...project, image: resolveImage(project.image) }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(portfolio.skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-muted-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <h2>Let's work together</h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in hearing about new opportunities and projects.
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a
                href={portfolio.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              {portfolio.contact.github && (
                <a
                  href={portfolio.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 {portfolio.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
