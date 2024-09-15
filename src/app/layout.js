import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Common/Footer/Footer";
import Navbar from "@/components/Common/NavBar/NavBar";
import FirstLoadPage from "@/components/Common/Others/FirstLoadPage";
import NextTopLoader from 'nextjs-toploader';
import { AuthUserProvider } from "@/context/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL),
  title: 'Infinity Academy Hatsingimari',
  description: 'Infinity Academy Hatsingimari',
  generator: 'Next.js',
  applicationName: 'Infinity Academy Hatsingimari',
  referrer: 'origin-when-cross-origin',

  icons: {
    icon: '/logoin.jpg',
    shortcut: '/logoin.jpg',
    apple: '/logoin.jpg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logoin.jpg',
    },
  },

  openGraph: {
    title: 'Infinity Academy Hatsingimari',
    description: 'Infinity Academy Hatsingimari',
    url: '/logoin.jpg',
    siteName: 'Infinity Academy Hatsingimari',
    images: [
      {
        url: '/logoin.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/logoin.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Infinity Academy Hatsingimari',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#431d7a" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} min-h-screen `}>
        <AuthUserProvider>
          {/* <div>
            <img src="/background.png" className=" h-screen w-full fixed top-0 left-0 -z-50" />
          </div> */}
          <div className=" h-screen w-full fixed top-0 left-0 -z-50 bg-gradient-to-b from-white to-blue-100" ></div>
          <NextTopLoader color="#FF0000"
            initialPosition={0.08}
            height={4}
            crawl={true}
            showSpinner={false} />
          <Navbar />

          {/* <div className=" min-h-screen overflow-x-hidden">
        {children}
        </div>
        <Footer /> */}

          <FirstLoadPage children={children} />
        </AuthUserProvider>
      </body>
    </html>
  );
}
