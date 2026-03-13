export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#08080d]">
            <div className="max-w-6xl px-6 py-12 mx-auto">
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
                    <div>
                        <p
                            className="text-lg font-bold tracking-widest uppercase"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            <span className="text-[var(--color-primary)]">Yasir</span> Products
                        </p>
                    </div>
                    <nav className="flex gap-6">
                        <a
                            href="#hero"
                            className="nav-link text-sm text-white/50 hover:text-[var(--color-primary)] transition-colors"
                            style={{ textDecoration: 'none' }}
                        >
                            Home
                        </a>
                        <a
                            href="#products"
                            className="nav-link text-sm text-white/50 hover:text-[var(--color-primary)] transition-colors"
                            style={{ textDecoration: 'none' }}
                        >
                            Products
                        </a>
                        <a
                            href="#socials"
                            className="nav-link text-sm text-white/50 hover:text-[var(--color-primary)] transition-colors"
                            style={{ textDecoration: 'none' }}
                        >
                            Socials
                        </a>
                    </nav>
                </div>
                <div className="pt-8 mt-8 text-center border-t border-white/5">
                    <p className="text-sm text-white/30">&copy; 2026 Yasir Products. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
