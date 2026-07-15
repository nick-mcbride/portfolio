'use client';

import { motion } from 'framer-motion';

const timeline = [
	{
		year: 'Now',
		title: 'Building portfolio-ready projects',
		text: 'I am refining my portfolio, strengthening my design taste, and turning class projects into work I can stand behind.',
	},
	{
		year: '2025',
		title: 'Exploring AI and data',
		text: 'I focused on machine learning, clustering, and data analysis projects that made technical problem solving more tangible.',
	},
	{
		year: '2024',
		title: 'Learning systems and UI structure',
		text: 'I started building more complete applications with clearer state flow, better UI decisions, and stronger project organization.',
	},
];

const interests = ['Problem solving', 'UI structure', 'AI tools', 'Game development', 'Clean systems', 'Learning in public'];

export default function AboutSection() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
			<div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
				<div>
					<motion.p
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--accent)]"
					>
						About me
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl"
					>
						I design and build clear software experiences with a focus on logic, structure, and visual restraint.
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl"
					>
						I&apos;m Nick McBride, a computer science student focused on thoughtful web interfaces, practical AI experiments, and software projects that feel polished instead of generic. I like work that has a strong visual point of view but still stays easy to use.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="mt-10 grid gap-4 sm:grid-cols-3"
					>
						{[
							'Computer Science student',
							'Based in Bloomington, IN',
							'Focused on web + AI projects',
						].map((item) => (
							<div key={item} className="rounded-3xl border border-[var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] shadow-[0_20px_60px_rgba(23,19,17,0.05)]">
								{item}
							</div>
						))}
					</motion.div>
				</div>

				<div className="space-y-6 rounded-[2rem] border border-[var(--border)] bg-[color:var(--surface-strong)] p-6 shadow-[0_30px_80px_rgba(23,19,17,0.08)]">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Timeline</p>
						<div className="mt-5 space-y-4">
							{timeline.map((item) => (
								<div key={item.year} className="rounded-3xl border border-[var(--border)] bg-[color:var(--background)] p-4">
									<p className="text-sm font-semibold text-[var(--accent)]">{item.year}</p>
									<h2 className="mt-1 text-lg font-semibold text-[var(--foreground)]">{item.title}</h2>
									<p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
								</div>
							))}
						</div>
					</div>

					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Interests</p>
						<div className="mt-4 flex flex-wrap gap-3">
							{interests.map((item) => (
								<span key={item} className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-2 text-sm text-[var(--foreground)]">
									{item}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}