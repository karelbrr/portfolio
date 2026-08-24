import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karel Braborec | Frontend Developer",
  description: "Portfolio of Karel Braborec, Frontend Developer",
  openGraph: {
    title: "Karel Braborec | Frontend Developer",
    description: "Portfolio of Karel Braborec, Frontend Developer",
    url: "https://karelbraborec.com",
    siteName: "Karel Braborec",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${ebGaramond.className} font-serif antialiased bg-[#0000FF]`}
    >
      <body className="flex flex-col font-serif bg-[#0000FF] overscroll-y-none">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
