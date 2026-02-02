import { gql } from "@apollo/client";

export const redirectQuery = gql`
  query redirectQuery {
    redirectRules {
      from
      match
      to
      type
    }
  }
`;
