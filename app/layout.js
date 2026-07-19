import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://m-sharjeel-dev.vercel.app'),
  title: {
    default: "Sharjeel Khalid | Full Stack Software Developer – PHP, React & Next.js",
    template: "%s | Sharjeel Khalid"
  },
  description:
    "Sharjeel Khalid is a Full Stack Software Developer specializing in PHP, React, Next.js, and JavaScript. Explore his portfolio of projects, skills, and published technical articles.",
  keywords: [
    "Sharjeel Khalid",
    "Full Stack Developer",
    "Software Developer Lahore",
    "PHP Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Pakistan",
    "Portfolio",
    "Freelance Developer"
  ],
  authors: [{ name: "Sharjeel Khalid", url: "https://m-sharjeel-dev.vercel.app" }],
  creator: "Sharjeel Khalid",
  publisher: "Sharjeel Khalid",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://m-sharjeel-dev.vercel.app",
    siteName: "Sharjeel Khalid – Software Developer Portfolio",
    title: "Sharjeel Khalid | Full Stack Software Developer",
    description: "Explore the portfolio of Sharjeel Khalid – a Full Stack Developer skilled in PHP, React, Next.js and modern web technologies based in Lahore, Pakistan.",
    images: [
      {
        url: "/sharjeel.png",
        width: 1200,
        height: 630,
        alt: "Sharjeel Khalid – Full Stack Software Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharjeel Khalid | Full Stack Software Developer",
    description: "Explore the portfolio of Sharjeel Khalid – a Full Stack Developer skilled in PHP, React, Next.js and modern web technologies.",
    images: ["/sharjeel.png"],
    creator: "@m-sharjeel-dev"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "Ue2CN8J0TNgRRomgXVlvkz7SIktl3L9OIfYuhKMKFuo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <header className="sticky top-0 z-[9999] w-full">
          <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            <Navbar />
          </div>
        </header>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <SpeedInsights />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
