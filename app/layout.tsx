import type { Metadata } from "next";
import "@fontsource/barlow-condensed/latin-600.css";
import "@fontsource/barlow-condensed/latin-700.css";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "NorthShore Pressure Pros | Pressure Washing in Mandeville & Covington, LA",
  description: "NorthShore Pressure Pros provides professional pressure washing, soft washing, driveway cleaning, and exterior cleaning in Mandeville, Covington, and nearby Northshore communities. Call for a free estimate.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-US"><body>{children}</body></html>;
}
