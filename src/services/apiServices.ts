import { axiosInstance } from "./config";

export const getHousesList = async () => {
  const response = await axiosInstance.get("/houses");

  return response.data;
};

export const getSwornMembers = async (swornMembersUrl: string[]) => {
  const swornMembersPromises = swornMembersUrl.map((url) =>
    getCharacterDetails(url)
  );

  const swornMembersList = await Promise.all(swornMembersPromises);

  return swornMembersList;
};

const getCharacterDetails = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
