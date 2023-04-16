import "../../App.css";
import BookCard from "./searchResult/BookCard.js";
import React, { useState } from "react";
import SearchField from "./searchSection/SearchField.js";
import { Grid, Divider } from "@mui/material";

function App() {
  const [result, setResult] = useState();

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <SearchField onSearch={(res) => setResult(res)} />
        <BookCard fillData={result} />
      </Grid>
    </>
  );
}

export default App;
