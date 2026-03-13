'use client';

import { useState } from 'react';
import { ComingSoonModal } from '../components/coming-soon-modal';

function Particles() {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 15 + 10,
    }));

    return (
        <div className="particles-bg">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        width: p.size + 'px',
                        height: p.size + 'px',
                        left: p.left + '%',
                        animationDelay: p.delay + 's',
                        animationDuration: p.duration + 's',
                    }}
                />
            ))}
        </div>
    );
}

function HeroSection() {
    return (
        <section id="hero" className="relative flex items-center justify-center min-h-screen px-6 pt-20 overflow-hidden">
            {/* Background glows */}
            <div
                className="glow-orb animate-pulse-glow"
                style={{
                    width: '600px',
                    height: '600px',
                    top: '-200px',
                    left: '-200px',
                    background: 'var(--color-primary)',
                }}
            />
            <div
                className="glow-orb animate-pulse-glow"
                style={{
                    width: '400px',
                    height: '400px',
                    bottom: '-100px',
                    right: '-100px',
                    background: 'var(--color-primary)',
                    animationDelay: '2s',
                }}
            />

            <Particles />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h1
                    className="mb-6 animate-slide-up"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
                >
                    <span className="text-[var(--color-primary)]">Yasir</span> Products
                </h1>
                <p
                    className="mb-10 text-lg leading-relaxed sm:text-xl text-white/60 animate-slide-up-delay-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    Professional Fortnite Montages &amp; PC Performance Tweaks
                </p>
                <div className="animate-slide-up-delay-2">
                    <a href="#products" className="btn-glow btn-glow-lg" style={{ textDecoration: 'none' }}>
                        Browse Products
                    </a>
                </div>
            </div>
        </section>
    );
}

function ProductCard({ title, description, price, onBuy }) {
    return (
        <div className="product-card flex flex-col h-full">
            <div className="mb-4">
                <span
                    className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full"
                    style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        color: 'var(--color-primary)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        fontFamily: 'var(--font-display)',
                    }}
                >
                    Service
                </span>
            </div>
            <h3 className="mb-3 text-xl" style={{ fontFamily: 'var(--font-display)', color: '#fff' }}>
                {title}
            </h3>
            <p className="mb-6 leading-relaxed text-white/50 grow" style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}>
                {description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}
                >
                    {price}
                </span>
                <button className="btn-glow" onClick={onBuy}>
                    Buy Now
                </button>
            </div>
        </div>
    );
}

function ProductsSection({ onBuy }) {
    return (
        <section id="products" className="relative px-6 py-24 sm:py-32">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="section-title text-3xl sm:text-4xl">Our Products</h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <ProductCard
                        title="Fortnite Montage Editing"
                        description="Professional Fortnite montage editing with clean transitions, synced effects, and high-quality visuals for your clips."
                        price="₦10,000"
                        onBuy={onBuy}
                    />
                    <ProductCard
                        title="PC Performance Tweaks"
                        description="Advanced PC optimization and tweaks designed to boost FPS, reduce lag, and improve overall gaming performance."
                        price="₦10,000"
                        onBuy={onBuy}
                    />
                </div>
            </div>
        </section>
    );
}

function SocialsSection() {
    const socials = [
        {
            name: 'TikTok',
            handle: '@yaxifyvfx',
            url: 'https://tiktok.com/@yaxifyvfx',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.27 8.27 0 004.76 1.5V7.03a4.84 4.84 0 01-1-.34z" />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            handle: '@yaxifyszn',
            url: 'https://youtube.com/@yaxifyszn',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="socials" className="relative px-6 py-24 sm:py-32" style={{ background: 'rgba(0, 212, 255, 0.02)' }}>
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="section-title text-3xl sm:text-4xl">Follow Yasir</h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                    {socials.map((s, i) => (
                        <a
                            key={i}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card social-link group"
                        >
                            <div className="mb-4 text-[var(--color-primary)] transition-transform group-hover:scale-110">
                                {s.icon}
                            </div>
                            <h3 className="mb-1 text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                                {s.name}
                            </h3>
                            <p className="text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                                {s.handle}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section id="about" className="relative px-6 py-24 sm:py-32">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="mb-8 section-title text-3xl sm:text-4xl">About Yasir Products</h2>
                <p
                    className="text-lg leading-relaxed text-white/60"
                    style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}
                >
                    Yasir Products provides high-quality Fortnite montage editing and PC optimization services for gamers
                    who want smoother gameplay and better content. The goal is to help players perform better and create
                    amazing gaming videos.
                </p>
            </div>
        </section>
    );
}

export default function Page() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <HeroSection />
            <ProductsSection onBuy={() => setModalOpen(true)} />
            <SocialsSection />
            <AboutSection />
            <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
