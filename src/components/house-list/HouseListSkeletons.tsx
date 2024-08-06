import { Skeleton } from "@mui/material";

export const HouseListSkeletons = () => {
  const harcodedArray = Array(9).fill(null);

  return (
    <>
      {harcodedArray.map((_, idx) => (
        <Skeleton width={250} height={300} key={idx} />
      ))}
    </>
  );
};
