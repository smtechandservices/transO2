import "./globals.css";
import "./app.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingConnect } from "@/components/common/FloatingConnect";
import { Toaster } from "@/components/ui/sonner";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://transo2.com";
const TITLE = "TransO2 — Engineering the Future of Environmental Infrastructure";
const DESCRIPTION =
  "TransO2 — Engineering the Future of Environmental Infrastructure. Transforming railway vehicles into intelligent environmental platforms that capture carbon, purify air, harvest water and create measurable sustainability value.";

export const viewport = {
  themeColor: "#000000",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — TransO2",
  },
  description: DESCRIPTION,
  applicationName: "TransO2",
  keywords: [
    "TransO2",
    "Environmental Infrastructure",
    "Carbon Capture",
    "Air Purification",
    "Water Harvesting",
    "Railways",
    "Net Zero",
    "Sustainability",
    "Environmental Intelligence",
  ],
  authors: [{ name: "TransO2" }],
  creator: "TransO2",
  publisher: "TransO2",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "TransO2",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
