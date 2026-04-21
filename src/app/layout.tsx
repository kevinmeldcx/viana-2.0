import type { Metadata } from "next";
import "./globals.css";
import { AppThemeProvider } from "@/components/primitives/AppThemeProvider";

export const metadata: Metadata = {
  title: "Viana Kit",
  description: "Built with Viana Kit — the AI-native design system.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground antialiased">
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
