import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agarwal Law Associates — Trusted Legal Partners",
  description: "Full-service law firm offering expertise across corporate, cyber, criminal, and civil law with proven success across India.",
  authors: [{ name: "Agarwal Law Associates" }],
  openGraph: {
    title: "Agarwal Law Associates",
    description: "Trusted legal partners with decades of expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
