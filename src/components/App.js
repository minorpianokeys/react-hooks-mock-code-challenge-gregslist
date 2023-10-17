import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")

  function onSearch(searchInput) {
    setSearch(searchInput)
  }

  return (
    <div className="app">
      <Header onSearch={onSearch}/>
      <ListingsContainer searchInput={search}/>
    </div>
  );
}

export default App;
