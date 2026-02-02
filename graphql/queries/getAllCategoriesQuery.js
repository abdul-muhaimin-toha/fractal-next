import { gql } from "@apollo/client";

export const getAllCategoriesQuery = gql`
  query GetAllCategories {
    insightCategories(first: 100) {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;
