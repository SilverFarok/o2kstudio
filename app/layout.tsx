import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O2K Studio | Industrial Website Improvements",
  description:
    "Practical website audits, WordPress fixes, and redesign support for manufacturing and industrial companies.",
  openGraph: {
    title: "O2K Studio | Industrial Website Improvements",
    description:
      "Modernize your industrial website, improve mobile usability, and make RFQ and contact flows clearer for potential buyers.",
    type: "website",
    url: "https://o2kstudio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
