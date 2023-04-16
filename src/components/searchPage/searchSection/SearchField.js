import React, { useState } from "react";
import { TextField, Stack, Button, Container, Box } from "@mui/material";
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
    <Container fullWidth fixed>
      <Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ m: 3 }}
        >
          <TextField
            label="Which Book Are You Looking For ?"
            id="fullWidth"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{ width: 100, height: 50 }}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default SearchField;
