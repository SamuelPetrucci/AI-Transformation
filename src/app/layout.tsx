import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import CalendlyPrefetch from "@/components/CalendlyPrefetch";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Transformation LLC — Go-to-Market Technology Partner",
  description: "Bring app ideas, products, and in-house applications to market fast—with auth, role-based access, biometrics, passkeys, and secure storage—then manage and maintain for maximum uptime.",
  keywords: [
    "go-to-market technology partner",
    "custom software",
    "AI agents",
    "AI transformation",
    "user authentication",
    "role-based access",
    "biometrics",
    "passkeys",
    "secure storage",
    "application uptime",
    "content engine",
    "own your tech stack",
    "stack rebuild",
    "staff AI training",
    "SMB technology",
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
    title: "AI Transformation LLC — Go-to-Market Technology Partner",
    description: "From app idea to market fast—auth, RBAC, biometrics, passkeys, secure storage—then managed and maintained for maximum uptime.",
    url: 'https://aitransformationllc.com',
    siteName: 'AI Transformation LLC',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Transformation LLC — Go-to-market technology partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Transformation LLC — Go-to-Market Technology Partner",
    description: "From app idea to market fast—auth, RBAC, biometrics, passkeys, secure storage—then managed and maintained for maximum uptime.",
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
        <CalendlyPrefetch />
        <Analytics />
      </body>
    </html>
  );
}
