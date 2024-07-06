import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nutio" });

export const metadata: Metadata = {
  title: "2RS File converter",
  description:
    "Convert files like images, video, and audio to other formats with this free and fast online converter.",
  verification: {
    google: "F34cI-FmqcyPEdSVNhug_a4m_pbKSqI6rQzQGQ-ulEs",
  },
};

// <meta name="google-site-verification" content="F34cI-FmqcyPEdSVNhug_a4m_pbKSqI6rQzQGQ-ulEs" />

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
          defaultTheme="dark"
          disableTransitionOnChange>
          <main className="flex flex-col min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
