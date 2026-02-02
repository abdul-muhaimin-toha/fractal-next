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
            revalidate: 60,
          },
        },
      },
    });

    return data;
  } catch (error) {

    // Retry logic
    if (retries > 0) {
      return getGqlData(query, variables, retries - 1);
    } else {
    }
  }
};

export default getGqlData;
