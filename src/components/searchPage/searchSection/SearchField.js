import React, { useState } from "react";
import { Box, TextField, Stack, Button } from "@mui/material";
import axios from "axios";

function SearchField({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleClick = async () => {
    try {
      const searchBook = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCRDyU7FA3id7G_wsGh7UDh8L_Hj2GfgTs`
      );
      onSearch(searchBook.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Stack direction="row" spacing={2}>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          mt: 2,
        }}
      >
        <TextField
          fullWidth
          label="Press Enter to Search"
          id="fullWidth"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchField;
