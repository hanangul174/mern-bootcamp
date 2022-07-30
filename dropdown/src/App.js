import React from "react";
import { Grid, Box } from "@mui/material/";
import data from "./componet/data.json";
import Dropdown from "./componet/dropdown";
import ImageSection from "./componet/image";

function App() {
  const [filtered_data, setfiltered_data] = React.useState();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        display: "flex",
        margin: "50px",
      }}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={6}>
          <Dropdown setfiltered_data={setfiltered_data} data={data} />
        </Grid>

        <Grid item xs={6}>
          <ImageSection filtered_data={filtered_data} data={data} />
        </Grid>
      </Grid>
    </Box>
  );
}
export default App;
