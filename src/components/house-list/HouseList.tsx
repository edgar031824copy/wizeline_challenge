import { FC } from "react";
import { useHouses } from "../../services/hooks";
import { HouseDetail } from "../house-detail";
import { Box, Typography } from "@mui/material";
import { HouseListSkeletons } from "./HouseListSkeletons";

export const HouseList: FC = () => {
  const { data: houses, isLoading, isError } = useHouses();

  if (isError) {
    return <Typography color="error">Error fetching members</Typography>;
  }

  return (
    <Box
      sx={{
        p: 8,
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <HouseListSkeletons />
      ) : (
        houses.map((house: Record<string, any>) => (
          <HouseDetail key={house.url} house={house} />
        ))
      )}
    </Box>
  );
};
