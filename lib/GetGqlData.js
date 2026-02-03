import ApolloClientLib from "./ApolloClientLib";

const getGqlData = async (query, variables = {}, retries = 3) => {
  try {
    const { data } = await ApolloClientLib.query({
      query,
      variables,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: {
            tags: ["cms"],
            revalidate: 3600, // Default to 1 hour (On-demand revalidation handles instant updates)
          },
        },
      },
    });

    return data;
  } catch (error) {

    // Retry logic
    if (retries > 0) {
      console.warn(`GraphQL fetch failed. Retrying... (${retries} left)`);
      return getGqlData(query, variables, retries - 1);
    } else {
      console.error("GraphQL final failure after retries:", error);
      return null;
    }
  }
};

export default getGqlData;
