import "magnific-popup/dist/magnific-popup.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/main.scss";

import type { Metadata } from "next";
import AppProviders from "@/components/wrappers/AppProviders";

import favicon from '@/assets/img/logo/fav-32-2.png';

export const metadata: Metadata = {
  title: "Gonçalo Oliveira Resume Portfolio",
  icons: favicon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProviders> {children}</AppProviders>
      </body>
    </html>
  );
}
