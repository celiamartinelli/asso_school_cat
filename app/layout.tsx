import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "L'École des Chats du Pays Houdanais",
  description: "Site web Association Ecole des Chats du Pays Houdanais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Balise meta pour la vérification Google Search Console */}
        <meta
          name="google-site-verification"
          content="BSgs4Qhg2q8TigPNq8zJ0xt-zVcWe_cakevndrF50xU"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
