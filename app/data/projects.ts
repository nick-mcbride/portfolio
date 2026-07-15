export type Project = {
	title: string;
	description: string;
	category: string;
	year: string;
	stack: string[];
	featured?: boolean;
};

export const projects: Project[] = [
	{
		title: 'AI Heart Disease Detection',
		description: 'A machine learning model that analyzes patient data to support early heart disease risk screening.',
		category: 'AI / ML',
		year: '2025',
		stack: ['Python', 'Data Analysis', 'Model Evaluation'],
		featured: true,
	},
	{
		title: 'Customer Segmentation Clustering',
		description: 'A clustering pipeline for identifying customer groups and shaping more targeted product strategies.',
		category: 'Data Science',
		year: '2025',
		stack: ['Python', 'Clustering', 'Visualization'],
		featured: true,
	},
	{
		title: 'Vending Machine Application',
		description: 'A desktop application with inventory tracking, product logic, and purchase flow management.',
		category: 'Software Engineering',
		year: '2024',
		stack: ['Java', 'UI Logic', 'State Management'],
		featured: true,
	},
	{
		title: 'Fight Flight Unity Game',
		description: 'A simple 2D game prototype focused on responsive controls, timing, and interactive game flow.',
		category: 'Game Development',
		year: '2024',
		stack: ['C#', 'Unity', 'Gameplay Systems'],
	},
];