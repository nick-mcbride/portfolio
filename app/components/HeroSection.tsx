'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,91,61,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(23,19,17,0.1),transparent_20%)]" />
			<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.08))]" />

			<div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-4 py-16 md:px-6 lg:px-8">
				<div className="max-w-4xl">
				<motion.h1
					initial={{ y: 24, opacity: 0 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8, delay: 0.1 }}
					className="max-w-4xl text-5xl font-semibold tracking-tight text-[var(--foreground)] md:text-7xl lg:text-8xl"
				>
					Designing software with a sharp point of view.
				</motion.h1>
				<motion.p
					initial={{ y: 24, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl"
				>
					I am a computer science student building projects in web development, AI, and software engineering. This portfolio is meant to feel less like a template and more like a designed system.
				</motion.p>

				<motion.div
					initial={{ y: 24, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="mt-10 flex flex-col gap-4 sm:flex-row"
				>
					<Link href="/projects" className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5">
						See projects
					</Link>
					<Link href="/about" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[color:var(--surface)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-soft)]">
						Read about me
					</Link>
				</motion.div>

				<div className="mt-12 grid gap-4 sm:grid-cols-3">
					{[
						'Web interfaces with structure',
						'AI and data experiments',
						'Projects that feel polished',
					].map((item) => (
						<div key={item} className="rounded-3xl border border-[var(--border)] bg-[color:var(--surface)] p-5 text-sm text-[var(--muted)] backdrop-blur">
							{item}
						</div>
					))}
				</div>
				</div>
			</div>
		</motion.section>
	);
}
