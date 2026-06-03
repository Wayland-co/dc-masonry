import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { theme } from "@/lib/theme";
import { content } from "@/lib/content";
import { Header } from "@/components/sections/header/header";
import { Footer } from "@/components/sections/footer/footer";
import { Plausible } from "@/components/integrations/plausible";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const themeVars = `:root {
  --background: ${theme.colors.background};
  --foreground: ${theme.colors.foreground};
  --card: ${theme.colors.background};
  --card-foreground: ${theme.colors.foreground};
  --popover: ${theme.colors.background};
  --popover-foreground: ${theme.colors.foreground};
  --primary: ${theme.colors.primary};
  --primary-foreground: ${theme.colors.primaryFg};
  --secondary: ${theme.colors.muted};
  --secondary-foreground: ${theme.colors.foreground};
  --muted: ${theme.colors.muted};
  --muted-foreground: ${theme.colors.mutedFg};
  --accent: ${theme.colors.accent};
  --accent-foreground: ${theme.colors.accentFg};
  --destructive: #DC2626;
  --border: ${theme.colors.border};
  --input: ${theme.colors.border};
  --ring: ${theme.colors.primary};
  --chart-1: #DDDDDD;
  --chart-2: #888888;
  --chart-3: #666666;
  --chart-4: #555555;
  --chart-5: #333333;
  --radius: ${theme.radii.md};
}`;

export const metadata: Metadata = {
  title: {
    default: content.business.name,
    template: `%s — ${content.business.name}`,
  },
  description: content.business.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeVars }} />
        <Plausible />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
