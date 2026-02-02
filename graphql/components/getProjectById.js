import getGqlData from "@/lib/GetGqlData";
import { getProjectByIdQuery } from "../queries/getProjectByIdQuery";

export const getProjectById = async (id) => {
  const data = await getGqlData(getProjectByIdQuery, { id });
  return data?.project || null;
};
