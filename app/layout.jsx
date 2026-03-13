import '../styles/globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata = {
    title: 'Yasir Products | High-Performance Fortnite Montages & PC Tweaks',
    description:
        'Professional Fortnite montage editing and PC performance optimization services for gamers and content creators.',
    keywords: 'Fortnite, montage, PC tweaks, gaming, FPS boost, editing, performance',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
