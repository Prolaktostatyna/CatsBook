import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import AfterSearch from "./subcomponents/AfterSearch";
import BeforeSearch from "./subcomponents/BeforeSearch";
import "./Main.scss";
import NotFound from "./subcomponents/NotFound";
import Favourites from "../Nav/subcomponents/Favourite";

const Main = () => {
  const storeContext = useContext(StoreContext);

  if (storeContext.searchedBreed[0] !== undefined) {
    return <AfterSearch />;
  } else if (storeContext.notFound === false) {
    return <NotFound text="Upss! We do not have this breed in our database" />;
  } else if (storeContext.showFavourites === true) {
    return <Favourites />;
  } else {
    return <BeforeSearch />;
  }
};

export default Main;
