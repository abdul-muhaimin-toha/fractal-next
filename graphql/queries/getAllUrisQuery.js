import { gql } from "@apollo/client";

export const getAllUrisQuery = gql`
  query GetAllUris {
    pages(first: 100) {
      edges {
        node {
          id
          uri
        }
      }
    }
    projects(first: 100) {
      edges {
        node {
          id
          slug
        }
      }
    }
    insights(first: 100) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;
