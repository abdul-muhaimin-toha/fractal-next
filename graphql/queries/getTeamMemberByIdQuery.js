import { gql } from "@apollo/client";

export const getTeamMemberByIdQuery = gql`
  query GetTeamMemberById($id: ID!) {
    teamMember(id: $id, idType: DATABASE_ID) {
      id
      databaseId
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      what_he_do
      role
    }
  }
`;
