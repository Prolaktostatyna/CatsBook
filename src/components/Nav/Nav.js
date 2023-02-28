import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import "./Nav.scss";
import logo from "../../Images/twitter_header_photo_1.png"
// import Favourites from "./subcomponents/Favourites";
import Search from "./subcomponents/Search";

const Nav = () => {
  const storeContext = useContext(StoreContext);

  const handleOnClickLogo = () => {
    storeContext.handleResetSearch();
  };

  const handleOnClickFavourites = () => {
    storeContext.handleShowFavourites(true);
  };

  return (
    <nav className="nav">
      <div onClick={handleOnClickLogo} className="nav__logo"></div>
      <ul className="nav__ul">
        <li className="nav__li">{<Search />}</li>
        <li className="nav__li" onClick={handleOnClickFavourites}>
          Favourites
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
