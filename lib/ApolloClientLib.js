import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const GRAPHQL_URL = process.env.NEXT_PUBLIC_SITES_API;

if (!GRAPHQL_URL) {
  throw new Error("❌ NEXT_PUBLIC_SITES_API is missing.");
}

const ApolloClientLib = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_URL,
    fetch,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        fields: {
          seo: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default ApolloClientLib;
