import React from "react";
import clsx from "clsx";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import MDXContent from "@theme/MDXContent";
import TOC from "@theme/TOC";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";

import styles from "./styles.module.css";

function renderCustomBlock(block, index) {
  switch (block._template) {
    case "hero":
      return <Hero data={block} index={index} key={index} />;
    case "features":
      return <Features data={block} index={index} key={index} />;
    default:
      return null;
  }
}

function extractHeroComponentsFromMDX(mdxContent) {
  // This is a simple implementation to extract Hero components from MDX
  // In a real implementation, you might want to use a more sophisticated parser
  const heroComponents = [];

  // Check if mdxContent contains Hero components
  if (mdxContent && typeof mdxContent === "string") {
    // This is a basic approach - in production you'd want a proper MDX parser
    const heroMatches = mdxContent.match(/<Hero[^>]*data=\{([^}]+)\}[^>]*\/>/g);

    if (heroMatches) {
      heroMatches.forEach((match, index) => {
        try {
          // Extract the data object from the Hero component
          const dataMatch = match.match(/data=\{([^}]+)\}/);
          if (dataMatch) {
            // Parse the data object
            const dataString = dataMatch[1];
            const data = JSON.parse(dataString.replace(/'/g, '"'));
            heroComponents.push({
              _template: "hero",
              data: data,
              index: index,
            });
          }
        } catch (e) {
          console.error("Error parsing Hero component:", e);
        }
      });
    }
  }

  return heroComponents;
}

export default function MDXPage(props) {
  const { content: MDXPageContent } = props;
  const {
    metadata: { title, description, frontMatter },
  } = MDXPageContent;
  const { wrapperClassName, hide_table_of_contents: hideTableOfContents } =
    frontMatter;

  const blocks = frontMatter?.blocks;

  // Extract Hero components from MDX content
  const extractedHeroBlocks = extractHeroComponentsFromMDX(
    MDXPageContent.toString(),
  );

  // Combine frontMatter blocks with extracted Hero blocks
  const allBlocks = [...(blocks || []), ...extractedHeroBlocks];

  return (
    <HtmlClassNameProvider
      className={clsx(
        wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
        ThemeClassNames.page.mdxPage,
      )}
    >
      <PageMetadata title={title} description={description} />
      <Layout>
        {allBlocks.map((block, i) => renderCustomBlock(block, i))}
        <main className="container container--fluid margin-vert--lg">
          <div className={clsx("row", styles.mdxPageWrapper)}>
            <div className={clsx("col", !hideTableOfContents && "col--8")}>
              <article>
                <MDXContent>
                  <MDXPageContent />
                </MDXContent>
              </article>
            </div>
            {!hideTableOfContents && MDXPageContent.toc.length > 0 && (
              <div className="col col--2">
                <TOC
                  toc={MDXPageContent.toc}
                  minHeadingLevel={frontMatter.toc_min_heading_level}
                  maxHeadingLevel={frontMatter.toc_max_heading_level}
                />
              </div>
            )}
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
