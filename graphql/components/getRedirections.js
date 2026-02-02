import getGqlData from "@/lib/GetGqlData";
import { redirectQuery } from "../queries/redirectQuery";


export const getRedirects = async () => {
  const allRedirects = await getGqlData(redirectQuery);
  return allRedirects?.redirectRules || [];
};
