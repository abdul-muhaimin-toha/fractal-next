import { gql } from "@apollo/client";

export const getInsightByIdQuery = gql`
  query GetInsightById($id: ID!) {
    insight(id: $id, idType: DATABASE_ID) {
      id
      title
      slug
      insightDescription
    }
  }
`;
