import { useRouter } from "next/router";
import { siteMetadata } from "../utils/site-metadata";

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
}: {
  title: string;
  description: string;
  ogType: string;
  ogImage: string[];
  twImage: string;
  canonicalUrl: string;
}) => {
  const router = useRouter();
  return (
    <>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage.map((url) => (
        <meta property="og:image" content={url} key={url} />
      ))}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteMetadata.siteUrl}${router.asPath}`
        }
      />
    </>
  );
};

export const PageSEO = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const router = useRouter();
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={[ogImageUrl]}
      twImage={twImageUrl}
      canonicalUrl={router.asPath}
    />
  );
};
