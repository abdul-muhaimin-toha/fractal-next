import { gql } from "@apollo/client";

export const getProjectByIdQuery = gql`
  query GetProjectById($id: ID!) {
    project(id: $id, idType: DATABASE_ID) {
      id
      databaseId
      title
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;
