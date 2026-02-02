import getGqlData from "@/lib/GetGqlData";
import { getAllTeamMembersQuery } from "../queries/getAllTeamMembersQuery";

export const getAllTeamMembers = async () => {
  const data = await getGqlData(getAllTeamMembersQuery);
  return data?.teamMembers?.edges?.map((edge) => edge.node) || [];
};
