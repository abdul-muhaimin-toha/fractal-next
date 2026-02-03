import { gql } from "@apollo/client";

export const getLayoutDataQuery = gql`
  query GetLayoutData {
    crbThemeOptions {
      address
      buttonPage {
        id
        uri
      }
      buttonText
      email
      websiteLogo
      websiteFavicon
      preconnectUrl
      siteDescription
      siteTitle
    }
    menus {
      edges {
        node {
          name
          id
          menuItems {
            edges {
              node {
                id
                uri
                label
              }
            }
          }
        }
      }
    }
  }
`;
