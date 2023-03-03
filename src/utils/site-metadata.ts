export const siteMetadata: SiteMetaDataType = {
  title: "Project Waitless",
  headerTitle: "Precision Inventory Management On The Edge", // Inventory Management On The Edge.
  description:
    "Reduce inventory loss by 50%, save 10 hours average a week calculating stock. Meet the new standard for modern stock take.",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://projectwaitless.io",
  siteLogo: "/favicon.ico",
  // TODO: Add image, and Social Banner, Change email, keywords
  image: "/favicon.ico",
  socialBanner: "/img/feature-1-masked.png",
  email: "lois.z@projectwaitless.io",
  discord: "https://discord.com/invite/QGbFWDcTTM",
  //  TODO: Add twitter
  twitter: "https://twitter.com/Twitter",
  instagram: "https://www.instagram.com/projectwaitless",
  linkedin: "https://www.linkedin.com/company/project-waitless/",
  keywords:
    "inventory management, music, hospitality, real state, venue, bookings, stock",
  locale: "en-US",
};

export type SiteMetaDataType = {
  title: string;
  headerTitle: string;
  description: string;
  language: string;
  theme: string;
  siteUrl: string;
  siteLogo: string;
  image: string;
  socialBanner: string;
  email: string;
  discord: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  locale: string;
  keywords: string;
};
