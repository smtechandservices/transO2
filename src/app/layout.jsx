import "./globals.css";
import "./app.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingConnect } from "@/components/common/FloatingConnect";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "TransO2 — Engineering the Future of Environmental Infrastructure",
  description:
    "TransO2 — Engineering the Future of Environmental Infrastructure. Transforming railway vehicles into intelligent environmental platforms that capture carbon, purify air, harvest water and create measurable sustainability value.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Figtree:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingConnect />
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
