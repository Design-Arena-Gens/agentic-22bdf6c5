import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viral Short Prompt Generator",
  description: "Craft high-energy, short-form video prompts with instant inspiration."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
