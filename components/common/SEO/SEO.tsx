import NextHead from "next/head";
import siteMeta from "./site-meta.json";

type HeadProps = {
  title: string;
  slug: string;
  image?: string;
  desc?: string;
};

export default function Head({ title, slug, image, desc }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={desc || siteMeta.desc} />
      <meta property="author" content={siteMeta.author} />
      <meta property="keywords" content={siteMeta.keywords} />
      <meta name="robots" content="index,follow" />
      {/* --- FB Meta --- */}
      <meta property="og:url" content={`${siteMeta.url}${slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc || siteMeta.desc} />
      <meta property="og:image" content={image || siteMeta.ogImg} />
      {/* --- Twitter Meta --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="github.com" />
      <meta property="twitter:url" content={`${siteMeta.url}${slug}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc || siteMeta.desc} />
      <meta name="twitter:image" content={image || siteMeta.ogImg} />
      <meta name="twitter:creator" content={siteMeta.twitter}></meta>
      {/* --- Meta End ---*/}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
