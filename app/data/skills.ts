export type SkillGroup = {
	title: string;
	description: string;
	items: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		title: 'Languages',
		description: 'Core languages I use for coursework, projects, and prototyping.',
		items: ['Java', 'Python', 'C', 'C#', 'SQL'],
	},
	{
		title: 'Web',
		description: 'Tools I use to build responsive interfaces and modern web experiences.',
		items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
	},
	{
		title: 'Data + AI',
		description: 'Skills I use to work with structured data and model-driven workflows.',
		items: ['Data Analysis', 'Clustering', 'Machine Learning', 'Visualization'],
	},
	{
		title: 'Tools',
		description: 'Development tools and environments that support my workflow.',
		items: ['Git', 'GitHub', 'VS Code', 'Unity', 'Linux'],
	},
];