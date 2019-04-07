import React from "react";
import Helmet from "react-helmet";

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [];
  keywords?: string[];
  title: string;
}

function SEO({
  description = "",
  lang = "en",
  meta = [],
  keywords = [],
  title
}: SEOProps) {
  const metaDescription = description || "Ryan Ponce's personal website.";

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | Ryan Ponce`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  );
}

export default SEO;
