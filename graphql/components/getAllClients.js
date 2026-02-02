import getGqlData from "@/lib/GetGqlData";
import { getAllClientsQuery } from "../queries/getAllClientsQuery";

export const getAllClients = async () => {
  const data = await getGqlData(getAllClientsQuery);
  return data?.clients?.nodes || [];
};
