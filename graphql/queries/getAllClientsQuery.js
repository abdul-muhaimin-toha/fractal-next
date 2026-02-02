import { gql } from "@apollo/client";

export const getAllClientsQuery = gql`
  query GetAllClients {
    clients(first: 100) {
      nodes {
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
