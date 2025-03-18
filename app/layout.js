import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";


const Outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL('http://localhost:3000/'),
  title: "Portfolio-Arghyadeep",
  description:
    "Welcome to Arghyadeep's portfolio showcasing web development projects.",
  keywords: "Arghyadeep, portfolio, web development, React, projects",
  author: "Arghyadeep Dutta",
  openGraph: {
    title: "Portfolio-Arghyadeep",
    description:
      "Welcome to Arghyadeep's portfolio showcasing web development projects.",
    url: "https://my-portfolio-seven-wine-10.vercel.app/",
    siteName: "Portfolio-Arghyadeep",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png",
        width: 800,
        height: 600,
        alt: "Portfolio-Arghyadeep",
      }
    ]
  },
  
    twitter: {
      title: "Portfolio-Arghyadeep",
      card: "summary_large_image",
      description:
        "Welcome to Arghyadeep's portfolio showcasing web development projects.",
      images: [
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png",
          width: 800,
          height: 600,
          alt: "Portfolio-Arghyadeep",
        }
      ],
    },


    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>
      </head>
      <body
        className={`${Outfit.className} ${Ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
