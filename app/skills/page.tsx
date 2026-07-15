import type { Metadata } from 'next';
import SkillsSection from '../components/SkillsSection';

export const metadata: Metadata = {
	title: 'Skills',
	description: 'Explore the languages, tools, and technical strengths Nick McBride uses across classwork and personal projects.',
};

export default function SkillsPage() {
	return <SkillsSection showAll />;
}