import type { Metadata } from 'next';
import AboutSection from '../components/AboutSection';

export const metadata: Metadata = {
	title: 'About',
	description: 'Learn more about Nick McBride, his background, interests, and the direction of his portfolio work.',
};

export default function AboutPage() {
	return <AboutSection />;
}