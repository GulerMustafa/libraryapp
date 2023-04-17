import React, { useState } from "react";
import { TextField, Stack, Button, Grid } from "@mui/material";
import axios from "axios";
import bgFoto from "../../../assets/background.jpg";

function SearchField({ onSearch }) {
  const [search, setSearch] = useState("");
  let API = process.env.REACT_APP_API_KEY;
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = async () => {
    try {
      const searchBook = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API}&maxResults=15`
      );
      onSearch(searchBook.data.items);
      setSearch("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundImage: `url(${bgFoto})`,
        height: 150,
        pt: 3,
        backgroundSize: 500,
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ m: 3 }}
      >
        <TextField
          label="Which Book Are You Looking For ?"
          id="searchField"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{ backgroundColor: "#fff", width: 300 }}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ width: 100, height: 50 }}
        >
          Search
        </Button>
      </Stack>
    </Grid>
  );
}

export default SearchField;
