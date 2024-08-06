import { useQuery } from "react-query";
import { getSwornMembers } from "../apiServices";

export const useSwornMembers = (swornMembersUrl: string[]) => {
  return useQuery(["swornMembers", swornMembersUrl], () =>
    getSwornMembers(swornMembersUrl)
  );
};
