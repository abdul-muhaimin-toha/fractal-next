import getGqlData from "@/lib/GetGqlData";
import { getTeamMemberByIdQuery } from "../queries/getTeamMemberByIdQuery";

export const getTeamMemberById = async (id) => {
  const data = await getGqlData(getTeamMemberByIdQuery, { id });
  return data?.teamMember;
};
