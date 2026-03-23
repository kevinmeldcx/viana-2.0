import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viana Kit",
  description: "Built with Viana Kit — the AI-native design system.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
