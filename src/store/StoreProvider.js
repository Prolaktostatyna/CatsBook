import React, { createContext, useState } from "react";

export const StoreContext = createContext({
  searchedBreed: "",
  handleOnClickSearchInput: () => {},
  notFound: true,
  favourites: [],
  showFavourites: false,
});

const StoreProvider = ({ children }) => {
  const [searchedBreed, setSearchedBreed] = useState("");
  const [notFound, setNotFound] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);

  const handleOnClickSearchInput = (searchedValue) => {
    if (searchedValue.length === 0) {
      setSearchedBreed("");
      setNotFound(false);
      setShowFavourites(false);
    } else {
      setSearchedBreed(searchedValue);
      setNotFound(true);
      setShowFavourites(false);
    }
  };

  const handleResetSearch = () => {
    setSearchedBreed("");
    setNotFound(true);
    setShowFavourites(false);
  };

  const handleAddFavourites = (favouriteCat) => {
    let flag = true;
    favourites.forEach((favourite) => {
      if (favourite.name === favouriteCat.name) {
        flag = false;
      }
    });
    if (flag === true) {
      setFavourites((prevFavourite) => [...prevFavourite, favouriteCat]);
    } else {
      setFavourites(
        favourites.filter((favourite) => favourite.name !== favouriteCat.name)
      );
    }
  };

  const handleShowFavourites = () => {
    setSearchedBreed("");
    setNotFound(true);
    setShowFavourites(true);
  };

  return (
    <StoreContext.Provider
      value={{
        searchedBreed: searchedBreed,
        handleOnClickSearchInput: handleOnClickSearchInput,
        handleResetSearch: handleResetSearch,
        notFound: notFound,
        favourites: favourites,
        handleAddFavourites: handleAddFavourites,
        showFavourites: showFavourites,
        handleShowFavourites: handleShowFavourites,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
