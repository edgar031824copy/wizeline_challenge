import { Box } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        height: "30%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/logo.png" alt="Description" height={120} />
    </Box>
  );
};
