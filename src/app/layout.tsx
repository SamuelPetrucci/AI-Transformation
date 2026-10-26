import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Transformation LLC — Custom Software, AI Automation & Modern Tech",
  description: "AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI automation, and modern technology solutions. Book a free consultation.",
  keywords: [
    "custom software",
    "AI automation",
    "AI transformation",
    "business automation",
    "AI receptionist",
    "modern technology solutions",
    "social media packages",
    "AI consulting",
    "digital transformation",
    "SMB technology",
    "process automation",
    "custom development",
    "AI agents",
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
    description: "AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI automation, and modern technology solutions.",
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
    description: "AI Transformation LLC helps businesses save time, reduce costs, and grow through custom software, AI automation, and modern technology solutions.",
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
    <html lang="en">
      <head>
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#050505" />
        <meta name="msapplication-TileColor" content="#050505" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AI Transformation LLC" />
      </head>
      <body
        className={`${display.variable} ${body.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
