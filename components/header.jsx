'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
    { linkText: 'Home', href: '#hero' },
    { linkText: 'Products', href: '#products' },
    { linkText: 'Socials', href: '#socials' },
    { linkText: 'About', href: '#about' },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
            <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
                <Link
                    href="#hero"
                    className="nav-link text-xl font-bold tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    <span className="text-[var(--color-primary)]">Yasir</span> Products
                </Link>

                {/* Desktop nav */}
                <ul className="hidden gap-8 md:flex">
                    {navItems.map((item, i) => (
                        <li key={i}>
                            <a
                                href={item.href}
                                className="nav-link text-sm font-medium tracking-wider uppercase text-white/70 transition-colors hover:text-[var(--color-primary)]"
                                style={{ fontFamily: 'var(--font-body)', textDecoration: 'none' }}
                            >
                                {item.linkText}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="flex flex-col gap-1.5 md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
                    />
                    <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="border-t border-white/5 md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl">
                    <ul className="flex flex-col gap-1 px-6 py-4">
                        {navItems.map((item, i) => (
                            <li key={i}>
                                <a
                                    href={item.href}
                                    className="nav-link block py-3 text-sm font-medium tracking-wider uppercase text-white/70 hover:text-[var(--color-primary)]"
                                    style={{ fontFamily: 'var(--font-body)', textDecoration: 'none' }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.linkText}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
