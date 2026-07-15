import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export const metadata: Metadata = {
	title: 'Home',
	description: 'A bold editorial portfolio for Nick McBride featuring featured projects, skills, and contact details.',
};

export default function MinimalModernPortfolio() {
	return (
		<div>
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
