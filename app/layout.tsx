import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karthikvangapandu.tech"),
  title: "Karthik Vangapandu | AI agent and backend engineer",
  description:
    "I build voice and agent systems where the model proposes and deterministic code decides. B.Tech EEE student at ANITS, Visakhapatnam, graduating 2027.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Karthik Vangapandu | AI agent and backend engineer",
    description:
      "I build voice and agent systems where the model proposes and deterministic code decides. B.Tech EEE student at ANITS, Visakhapatnam, graduating 2027.",
    url: "https://karthikvangapandu.tech",
    siteName: "Karthik Vangapandu",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-white font-[family-name:var(--font-manrope),sans-serif]">
        {children}
      </body>
    </html>
  );
}
