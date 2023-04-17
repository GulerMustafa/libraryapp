import "../../App.css";
import BookCard from "./searchResult/BookCard.js";
import React, { useState } from "react";
import SearchField from "./searchSection/SearchField.js";
import Footer from "../Footer";

function App() {
  const [result, setResult] = useState();

  return (
    <>
      <SearchField onSearch={(res) => setResult(res)} />
      <BookCard fillData={result} />
      <Footer />
    </>
  );
}

export default App;
