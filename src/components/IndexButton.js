import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

function IndexButton() {
  const [search, setSearch] = useState();
  const [dataBook, setDataBook] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCRDyU7FA3id7G_wsGh7UDh8L_Hj2GfgTs`
        )
        .then((res) => setDataBook(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  console.log(dataBook);
  return (
    <div>
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
          onKeyPress={searchBook}
        />
      </Box>
    </div>
  );
}

export default IndexButton;
