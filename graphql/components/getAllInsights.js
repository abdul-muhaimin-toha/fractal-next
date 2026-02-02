import getGqlData from "@/lib/GetGqlData";
import { getAllInsightsQuery } from "../queries/getAllInsightsQuery";

export const getAllInsights = async () => {
  const data = await getGqlData(getAllInsightsQuery);
  return data?.insights?.edges?.map((edge) => edge.node) || [];
};
