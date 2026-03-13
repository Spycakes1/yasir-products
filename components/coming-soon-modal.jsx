'use client';

import { useEffect } from 'react';

export function ComingSoonModal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="mb-6">
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full"
                        style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)' }}
                    >
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--color-primary)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <h3
                        className="mb-3 text-2xl"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}
                    >
                        Coming Soon
                    </h3>
                    <p className="text-base leading-relaxed text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                        Purchasing will be available soon. Stay tuned.
                    </p>
                </div>
                <button className="btn-glow" onClick={onClose} style={{ width: '100%', maxWidth: '200px' }}>
                    Close
                </button>
            </div>
        </div>
    );
}
