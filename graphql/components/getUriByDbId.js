import getGqlData from "@/lib/GetGqlData";
import { getUriByDbIdQuery } from "../queries/getUriByDbIdQuery";

export const getUriByDbId = async (id) => {
  const data = await getGqlData(getUriByDbIdQuery, { id });
  return data?.page?.uri || "/";
};
