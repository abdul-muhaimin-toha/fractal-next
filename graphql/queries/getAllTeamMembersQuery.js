import { gql } from "@apollo/client";

export const getAllTeamMembersQuery = gql`
  query GetAllTeamMembers {
    teamMembers {
      edges {
        node {
          id
          title
          whatHeDo
          designation
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
