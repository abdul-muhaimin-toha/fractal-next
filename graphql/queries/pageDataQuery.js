import { gql } from "@apollo/client";

export const pageDataQuery = gql`
  query PageDataQuery($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        seo {
          metaDesc
          title
          canonical
          metaKeywords
          opengraphImage {
            mediaItemUrl
          }
        }
        featuredImage {
          node {
            id
            mediaItemUrl
          }
        }
        blocks {
          order
          name
          attributesJSON
        }
      }
      ... on Project {
        id
        title
        seo {
          metaDesc
          title
          canonical
          metaKeywords
          opengraphImage {
            mediaItemUrl
          }
        }
        featuredImage {
          node {
            id
            mediaItemUrl
          }
        }
        blocks {
          order
          name
          attributesJSON
        }
      }
      ... on Insight {
        id
        title
        seo {
          metaDesc
          title
          canonical
          metaKeywords
          opengraphImage {
            mediaItemUrl
          }
        }
        featuredImage {
          node {
            id
            mediaItemUrl
          }
        }
        blocks {
          order
          name
          attributesJSON
        }
      }
    }
  }
`;