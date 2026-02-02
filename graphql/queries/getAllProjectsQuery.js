import { gql } from "@apollo/client";

export const getAllProjectsQuery = gql`
  query GetAllProjects {
    projects(first: 100) {
      edges {
        node {
          id
          databaseId
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          projectCategories {
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
