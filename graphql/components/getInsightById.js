import getGqlData from "@/lib/GetGqlData";
import { getInsightByIdQuery } from "../queries/getInsightByIdQuery";

export const getInsightById = async (id) => {
  const data = await getGqlData(getInsightByIdQuery, { id });
  return data?.insight || null;
};
