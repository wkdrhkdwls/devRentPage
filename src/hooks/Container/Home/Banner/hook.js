import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function useBannerDetail() {
  const link =
    "https://docs.google.com/forms/d/1EwajjKzeGFgRZ7Tj0j3yYXEgUmDuNmkLQxcPcGVZJNM/edit";
  const DataUrl = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          name: { eq: "BannerImg" }
        }
      ) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);
  return { link, DataUrl };
}
