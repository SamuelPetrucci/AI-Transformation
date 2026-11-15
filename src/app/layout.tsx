import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Transformation LLC — Custom Software, AI Automation & Modern Tech",
  description: "AI Transformation LLC builds automated content engines and product advertising—SEO-optimized for organic traffic—plus custom software, AI automation, and modern tech upgrades. Book a free consultation.",
  keywords: [
    "custom software",
    "AI automation",
    "AI transformation",
    "business automation",
    "AI receptionist",
    "modern technology solutions",
    "automated content engines",
    "product advertising",
    "SEO optimization",
    "organic traffic",
    "social media packages",
    "AI consulting",
    "digital transformation",
    "SMB technology",
    "process automation",
    "custom development",
    "AI agents",
    "application integrations",
  ],
  authors: [{ name: "AI Transformation LLC" }],
  creator: "AI Transformation LLC",
  publisher: "AI Transformation LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aitransformationllc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AI Transformation LLC — Custom Software, AI Automation & Modern Tech",
    description: "We build automated content engines and product advertising—SEO-optimized for organic traffic—plus custom software, AI agents, and modern tech upgrades.",
    url: 'https://aitransformationllc.com',
    siteName: 'AI Transformation LLC',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Transformation LLC — Save time, reduce costs, grow',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Transformation LLC — Custom Software, AI Automation & Modern Tech",
    description: "We build automated content engines and product advertising—SEO-optimized for organic traffic—plus custom software, AI agents, and modern tech upgrades.",
    images: ['/og-image.jpg'],
    creator: '@aitransformation',
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#f3f6f4" />
        <meta name="msapplication-TileColor" content="#f3f6f4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Transformation LLC" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
