'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';

type SkillsSectionProps = {
	showAll?: boolean;
};

const featuredSkillGroups = skillGroups.slice(0, 2);


export default function SkillsSection({ showAll = false }: SkillsSectionProps) {
	const displayedGroups = showAll ? skillGroups : featuredSkillGroups;

	return (
		<section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
			<div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl"
				>
					{showAll ? 'Skills and technologies' : 'Skills & technologies'}
				</motion.h2>

				<p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
					{showAll
						? 'A fuller view of the languages, tools, and technical areas I use across classwork and side projects.'
						: 'A quick snapshot of the tools and languages I use most often right now.'}
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
					{displayedGroups.map((group, index) => (
						<motion.div
							key={group.title}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.45, delay: index * 0.08 }}
							whileHover={{ y: -4 }}
							className="rounded-[1.75rem] border border-[var(--border)] bg-[color:var(--surface-strong)] p-6 shadow-[0_18px_45px_rgba(23,19,17,0.06)]"
						>
							<p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">{group.title}</p>
							<p className="mt-3 text-sm leading-7 text-[var(--muted)]">{group.description}</p>
							<div className="mt-5 flex flex-wrap gap-2">
								{group.items.map((item) => (
									<span key={item} className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--foreground)]">
										{item}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
