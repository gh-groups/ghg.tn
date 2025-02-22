import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "GitHub Groups - By MAAK CORP",
    description: "A Chrome extension to organize your GitHub repositories into groups",
    metadataBase: new URL('https://ghg.tn'),
    authors: [{ name: 'MAAK CORP' }],
    keywords: [
        'github',
        'groups',
        'extension',
        'chrome',
        'repository',
        'organize',
        'maak',
        'corp',
        'ghg',
        'tn',
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://planifi.tn',
        siteName: 'PLANIFI',
        title: 'GitHub Groups - By MAAK CORP',
        description: 'A Chrome extension to organize your GitHub repositories into groups',
        images: [
            {
                url: 'https://ghg.tn/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'GitHub Groups - By MAAK CORP',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GitHub Groups - By MAAK CORP',
        description: 'A Chrome extension to organize your GitHub repositories into groups',
        images: ['https://ghg.tn/twitter-image.svg'],
    },
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: dark)',
                url: '/logo_white.png',
                type: 'image/png',
            },
            {
                media: '(prefers-color-scheme: light)',
                url: '/logo_dark.png',
                type: 'image/png',
            },
        ],
        apple: [
            { url: '/icon-192x192.svg' },
        ],
        shortcut: ['/icon-512x512.svg'],
    },
    manifest: '/manifest.json',
    alternates: {
        canonical: 'https://ghg.tn'
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            {
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                "name": "GitHub Groups",
                                "applicationCategory": "BusinessApplication",
                                "operatingSystem": "Web",
                                "description": "A Chrome extension to organize your GitHub repositories into groups",
                                "url": "https://ghg.tn",
                                "author": {
                                    "@type": "Organization",
                                    "name": "MAAK CORP",
                                    "url": "https://maak-corp.tn",
                                    "logo": "https://maak-corp.tn/logo.png"
                                },
                                "image": "https://ghg.tn/og-image.svg",
                            }
                        )
                    }}
                />
            </head>
            <body className="antialiased text-black">
                {children}
                <Footer />
            </body>
        </html>
    );
}
