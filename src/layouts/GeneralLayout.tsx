import Navbar from "@/components/navigation/Navbar";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/navigation/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  title: string;
  description: string;
  icon?: any;
  children?: ReactNode;
  no_text?: any;
  twitter_title?: string;
  twitter_description?: string;
  canonical_url?: string;
  og_image?: any;
}

const GeneralLayout = ({
  children,
  no_text,
  title,
  description,
  twitter_title,
  twitter_description,
  canonical_url,
  og_image,
}: Props) => {
  const desc =
    "At Erickson Plaza, we bring you the ultimate online shopping experience, where you can explore a wide range of products from the comfort of your home.";
  const original_title = "Erickson Plaza";
  const url = "https://ecommerce-ui-bako.vercel.app/";
  return (
    <>
      <Head>
        <title>{title ? `${title} | EricksonPlaza ` : original_title}</title>
        <meta name="description" content={description ? description : desc} />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content={title ? `${title} | EricksonPlaza` : original_title}
        />
        <meta
          name="og:description"
          property="og:description"
          content={description ? description : desc}
        />
        <meta property="og:site_name" content={url} />
        <meta property="og:url" content="" />
        <meta
          property="og:image"
          content={
            og_image
              ? og_image
              : "//cdn.example.com/uploads/images/webpage_300x200.svg"
          }
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={
            twitter_title
              ? `${twitter_title} | EricksonPlaza`
              : "EricksonPlaza | Buy and sell items online"
          }
        />
        <meta name="twitter:description" content={twitter_description} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <link rel="icon" type="image/svg" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="twitter:image" content={og_image} />
        <link rel="canonical" href={canonical_url ? canonical_url : url} />
      </Head>
      <div className={`flex flex-col w-full ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default GeneralLayout;
