import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RaycastCard",
  description: "A challenge by Spikes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="absolute z-0 w-screen bg-gradient-radial from-white/90 to-white/70 h-screen" />
        {children}
      </body>
    </html>
  );
}
