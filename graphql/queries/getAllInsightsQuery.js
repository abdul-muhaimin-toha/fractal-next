import { gql } from "@apollo/client";

export const getAllInsightsQuery = gql`
  query GetAllInsights {
    insights(first: 100) {
      edges {
        node {
          id
          title
          slug
          insightDescription
          featuredImage {
            node {
              sourceUrl
            }
          }
          insightCategories {
            nodes {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`;
