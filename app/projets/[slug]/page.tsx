import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FeaturedProjectPage } from '../../../components/projects/FeaturedProjectPage';
import { ProjectShowcase } from '../../../components/projects/ProjectShowcase';
import { featuredProjects, getFeaturedProject } from '../../../data/featured-projects';
import { getProject, projects } from '../../../data/projects';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...projects, ...featuredProjects].map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getFeaturedProject(slug) ?? getProject(slug);

  return project
    ? {
        title: `${project.title} — Océane Lemaître`,
        description: project.description,
      }
    : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const featuredProject = getFeaturedProject(slug);

  if (featuredProject) {
    return <FeaturedProjectPage project={featuredProject} />;
  }

  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="project-page">
      <nav className="project-navigation" aria-label="Navigation du projet">
        <Link href="/#archive">← Retour aux projets</Link>
        <Link href="/" className="project-signature">Océane Lemaître</Link>
      </nav>

      <header className="project-hero">
        <div className="project-eyebrow">
          <span>({String(currentIndex + 1).padStart(2, '0')})</span>
          <span>{project.label}</span>
          <span>2026</span>
        </div>
        <h1>{project.title}</h1>
        <div className="project-intro">
          <p>{project.description}</p>
          <p>{project.details}</p>
        </div>
      </header>

      <ProjectShowcase project={project} />

      <footer className="project-next">
        <span>Projet suivant</span>
        <Link href={`/projets/${nextProject.slug}`}>
          {nextProject.title}<span aria-hidden="true">↗</span>
        </Link>
      </footer>
    </main>
  );
}
