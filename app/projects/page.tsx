import type { Metadata } from 'next';
import ProjectsSection from '../components/ProjectsSection';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Browse the projects Nick McBride has built across AI, data science, software engineering, and game development.',
};

export default function ProjectsPage() {
	return <ProjectsSection showAll compact />;
}