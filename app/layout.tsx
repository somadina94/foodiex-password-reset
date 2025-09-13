import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Champs Sports Lovers - Password Reset",
  description: "Reset your password for the Champs Sports Lovers app",
  keywords: ["password reset", "champs sports", "sports app", "authentication"],
  authors: [{ name: "Champs Sports Lovers Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
