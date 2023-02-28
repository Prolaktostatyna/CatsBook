import React, { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import "./FavouritesList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const FavouritesList = ({ favourites, showFavourites }) => {
  const storeContext = useContext(StoreContext);

  const handleRemoveFavourites = (removeCat) => {
    let confirmAction = window.confirm(
      `Are you sure to remove ${removeCat.name} from favourite list?`
    );
    if (confirmAction) {
      storeContext.handleAddFavourites(removeCat);
    }
  };

  const handleShowSpecification = (catSpecification) => {
    storeContext.handleOnClickSearchInput([catSpecification]);
  };

  if (showFavourites === true) {
    return favourites.map((favourite, i) => {
      return (
        <li className="favourliteList" key={i}>
          <img
            className="favourliteList__img"
            src={favourite.image_link}
            alt="kot"
            onClick={() => handleShowSpecification(favourite)}
          />

          <div className="favourliteList__name">
            Breed: <b>{favourite.name} </b>
          </div>

          <div className="favourliteList__heart">
            <FontAwesomeIcon
              onClick={() => handleRemoveFavourites(favourite)}
              icon={faSolidHeart}
            />
          </div>
        </li>
      );
    });
  }
};

export default FavouritesList;
