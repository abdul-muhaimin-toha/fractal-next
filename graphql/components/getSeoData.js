import getGqlData from "@/lib/GetGqlData";
import { seoQuery } from "../queries/seoQuery";

export const getSeoData = async (uri = "/") => {
  const variables = { uri };
  const seoData = await getGqlData(seoQuery, variables);

  return seoData?.pageBy;
};
