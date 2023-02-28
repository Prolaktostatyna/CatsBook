import React, { useContext, useState } from "react";
import { apiKey } from "../../../apidata/apidata";
import { StoreContext } from "../../../store/StoreProvider";
import "./Search.scss";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const storeContext = useContext(StoreContext);

  const handleFetch = (e) => {
    const headers = {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    };
    fetch("https://api.api-ninjas.com/v1/cats?name=" + searchInput, { headers })
      .then((response) => response.json())
      .then((data) => {
        storeContext.handleOnClickSearchInput(data);
        setSearchInput("");
      })
      .catch((err) => console.error(err));
  };

  const handleOnClickButton = (e) => {
    handleFetch();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFetch();
    }
  };

  return (
    <div>
      <input
        className="searchGeneral searchInput"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Find breed"
        value={searchInput}
      />
      <button
        className="searchGeneral searchButton"
        onClick={handleOnClickButton}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
