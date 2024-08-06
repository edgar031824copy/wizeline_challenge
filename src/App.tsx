import { Box } from "@mui/material";
import { Header, HouseList } from "./components";

function App() {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Header />
      <HouseList />
    </Box>
  );
}

export default App;
