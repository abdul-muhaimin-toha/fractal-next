import getGqlData from "@/lib/GetGqlData";
import { getAllCategoriesQuery } from "../queries/getAllCategoriesQuery";

export const getAllCategories = async () => {
  const data = await getGqlData(getAllCategoriesQuery);
  return data?.insightCategories?.nodes || [];
};
