import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Chaitanya Lokhande | Full-Stack Developer",
  description:
    "A bold portfolio for Chaitanya Lokhande, featuring AI products, real-time apps, and polished full-stack work.",
  keywords: ["portfolio", "developer", "full-stack", "React", "Next.js", "AI"],
  authors: [{ name: "Chaitanya" }],
  openGraph: {
    type: "website",
    title: "Chaitanya Lokhande | Full-Stack Developer",
    description: "AI products, real-time experiences, and sharp web interfaces.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
