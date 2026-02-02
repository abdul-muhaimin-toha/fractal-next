import getGqlData from "@/lib/GetGqlData";
import { sitemapQuery } from "../queries/sitemapQuery";


// Function to get all projects or specific projects by ids
export const getSitemap = async () => {
  const allSitemap = await getGqlData(sitemapQuery);
  return allSitemap
};