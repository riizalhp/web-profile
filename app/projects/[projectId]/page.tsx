import { projectsData } from '@/lib/projects';
import ProjectDetailPage from './ProjectDetailPage';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    projectId: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  const { projectId } = params;
  const project = projectsData.find(p => p.id === projectId);
  const otherProjects = projectsData.filter(p => p.id !== projectId);

  return <ProjectDetailPage project={project} otherProjects={otherProjects} />;
}