import getGqlData from "@/lib/GetGqlData";
import { getAllProjectsQuery } from "../queries/getAllProjectsQuery";

export const getAllProjects = async () => {
  const data = await getGqlData(getAllProjectsQuery);
  return data?.projects?.edges?.map((edge) => edge.node) || [];
};
