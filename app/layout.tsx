import type { Metadata } from "next";
import "./globals.css";
import { ParallaxBackground } from "@/components/ParallaxBackground";

export const metadata: Metadata = {
  title: "Nimisha Ravi",
  description: "Cinematic Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ParallaxBackground>{children}</ParallaxBackground>
      </body>
    </html>
  );
}
