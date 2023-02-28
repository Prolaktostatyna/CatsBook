import React, { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import FavouritesList from "./FavouritesList";
import "./Favourite.scss";
import NotFound from "../../Main/subcomponents/NotFound";

const Favourite = () => {
  const storeContext = useContext(StoreContext);

  if (storeContext.favourites.length !== 0) {
    return (
      <ul className="favouritesGeneral">
        <FavouritesList
          favourites={storeContext.favourites}
          showFavourites={storeContext.showFavourites}
        />
      </ul>
    );
  } else {
    return (
      <NotFound text="You do not have any cats added to your favourites list" />
    );
  }
};

export default Favourite;
