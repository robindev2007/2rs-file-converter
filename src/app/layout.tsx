import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nutio" });

export const metadata: Metadata = {
  title: "2RS File converter",
  description: "Online image, video and audio file converter for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${nunito.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main className="flex flex-col min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
