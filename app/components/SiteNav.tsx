'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/skills', label: 'Skills' },
	{ href: '/#contact', label: 'Contact' },
];

export default function SiteNav() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	return (
		<header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--surface)]/90 backdrop-blur-xl">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
				<Link href="/" className="flex flex-col gap-0.5">
					<span className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Nick McBride</span>
					<span className="text-lg font-semibold text-[var(--foreground)]">Portfolio</span>
				</Link>

				<nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
					{navItems.map((item) => {
						const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href.replace('/#', '/'));

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-full px-4 py-2 text-sm transition-colors ${
									isActive
										? 'bg-[var(--foreground)] text-[var(--background)]'
										: 'text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]'
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				<button
					type="button"
					className="inline-flex items-center rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground)] md:hidden"
					aria-expanded={menuOpen}
					aria-controls="mobile-nav"
					onClick={() => setMenuOpen((value) => !value)}
				>
					Menu
				</button>
			</div>

			{menuOpen ? (
				<nav id="mobile-nav" className="border-t border-[var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 md:hidden" aria-label="Mobile">
					<div className="mx-auto flex max-w-7xl flex-col gap-2">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="rounded-2xl px-4 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--accent-soft)]"
							>
								{item.label}
							</Link>
						))}
					</div>
				</nav>
			) : null}
		</header>
	);
}