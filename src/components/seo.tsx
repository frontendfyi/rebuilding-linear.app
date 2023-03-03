"use client";
import { usePathname } from "next/navigation";
import { siteMetadata } from "../utils/site-metadata";

const SEO = ({
  pageTitle,
  description,
  ogType,
  ogImage,
  canonicalUrl,
}: {
  pageTitle: string;
  description: string;
  ogType: string;
  ogImage: string;
  canonicalUrl: string;
}) => {
  const path = usePathname();

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${path}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content={ogImage} />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="robots" content="noindex" />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="keywords" content={siteMetadata.keywords} />
      <meta name="robots" content="all" />
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
};

export const PageSEO = ({
  pageName,
  description,
  ogType,
  socialBanner,
}: {
  pageName: string;
  description?: string;
  ogType?: string;
  socialBanner?: string;
}) => {
  ogType = ogType ? ogType : "website";
  description = description ? description : siteMetadata.description;
  const path = usePathname();
  const ogImageUrl = socialBanner
    ? siteMetadata.siteUrl + socialBanner
    : siteMetadata.siteUrl + siteMetadata.socialBanner;
  const pageTitle =
    pageName === "Home"
      ? siteMetadata.title
      : pageName + " | " + siteMetadata.title;
  return (
    <SEO
      pageTitle={pageTitle}
      description={description}
      ogType={ogType}
      ogImage={ogImageUrl}
      canonicalUrl={siteMetadata.siteUrl + path}
    />
  );
};
