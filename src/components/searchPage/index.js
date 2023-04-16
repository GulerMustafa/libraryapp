import "../../App.css";
import BookCard from "./searchResult/BookCard.js";
import React, { useState } from "react";
import SearchField from "./searchSection/SearchField.js";

function App() {
  const [result, setResult] = useState();

  return (
    <>
      <SearchField onSearch={(res) => setResult(res)} />
      <BookCard fillData={result} />
    </>
  );
}

export default App;
