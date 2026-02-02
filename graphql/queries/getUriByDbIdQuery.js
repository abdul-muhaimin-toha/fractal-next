import { gql } from "@apollo/client";

export const getUriByDbIdQuery = gql`
  query GetUriByDbId($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      uri
    }
  }
`;
