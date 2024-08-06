import { useQuery } from "react-query";
import { getHousesList } from "../apiServices";

export const useHouses = () => {
  return useQuery("houses", getHousesList);
};
