'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../data/projects';

type ProjectsSectionProps = {
	showAll?: boolean;
	compact?: boolean;
};

const previewProjects = projects.filter((project) => project.featured).slice(0, 3);


export default function ProjectsSection({ showAll = false, compact = false }: ProjectsSectionProps) {
	const displayedProjects = showAll ? projects : previewProjects;

	return (
		<section className={`mx-auto max-w-7xl px-4 ${compact ? 'py-10 md:py-14' : 'py-16 md:py-24'} md:px-6 lg:px-8`}>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl"
			>
				{showAll ? 'Projects built to show process, polish, and range.' : 'Featured projects'}
			</motion.h2>

			<p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
				{showAll
					? 'A wider look at the work that mixes software engineering, data exploration, and interactive build quality.'
					: 'A curated set of projects that reflect the direction I want this portfolio to communicate.'}
			</p>

			<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{displayedProjects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55, delay: index * 0.08 }}
						whileHover={{ y: -6 }}
						className="group rounded-[1.75rem] border border-[var(--border)] bg-[color:var(--surface-strong)] p-6 shadow-[0_20px_50px_rgba(23,19,17,0.06)]"
					>
						<div className="flex items-center justify-between gap-4">
							<span className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--foreground)]">
								{project.category}
							</span>
							<span className="text-sm text-[var(--muted)]">{project.year}</span>
						</div>

						<h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)]">{project.title}</h3>
						<p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">{project.description}</p>

						<div className="mt-6 flex flex-wrap gap-2">
							{project.stack.map((item) => (
								<span key={item} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
									{item}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>

			{showAll ? null : (
				<div className="mt-10 flex justify-start">
					<Link href="/projects" className="inline-flex items-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5">
						View all projects
					</Link>
				</div>
			)}
		</section>
	);
}
