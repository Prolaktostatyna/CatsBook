import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import StarRate from "../../StarRate/StarRate";
import "./AfterSearch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faReguralHeart } from "@fortawesome/free-regular-svg-icons";

const AfterSearch = () => {
  const storeContext = useContext(StoreContext);

  const [heart, setHeart] = useState(faReguralHeart);

  useEffect(() => {
    let flag = false;
    storeContext.favourites.forEach((favourite) => {
      if (favourite.name === storeContext.searchedBreed[0].name) {
        flag = true;
        setHeart(faSolidHeart);
      }
    });
    if (flag === false) {
      setHeart(faReguralHeart);
    }
  }, [storeContext.favourites, storeContext.searchedBreed]);

  const handleFavourites = () => {
    storeContext.handleAddFavourites(storeContext.searchedBreed[0]);
  };

  return (
    <div className="after-search">
      <img
        className="after-search__image"
        src={storeContext.searchedBreed[0].image_link}
        alt="kot"
      />
      <main>
        <ul className="after-search__ul">
          <li className="after-search__li">
            Breed:{" "}
            <b>
              {storeContext.searchedBreed[0].name}{" "}
              <FontAwesomeIcon
                className="after-search__li--heart"
                onClick={handleFavourites}
                icon={heart}
              />
            </b>
          </li>
          <li className="after-search__li">
            Children friendly:{" "}
            <StarRate
              rating={storeContext.searchedBreed[0].children_friendly}
            />
          </li>
          <li className="after-search__li">
            General health:{" "}
            <StarRate rating={storeContext.searchedBreed[0].general_health} />
          </li>
          <li className="after-search__li">
            Grooming:{" "}
            <StarRate rating={storeContext.searchedBreed[0].grooming} />
          </li>
          <li className="after-search__li">
            Inteligence:{" "}
            <StarRate rating={storeContext.searchedBreed[0].intelligence} />
          </li>
          <li className="after-search__li">
            Other pets friendly:{" "}
            <StarRate
              rating={storeContext.searchedBreed[0].other_pets_friendly}
            />
          </li>
          <li className="after-search__li">
            Playfulness:{" "}
            <StarRate rating={storeContext.searchedBreed[0].playfulness} />
          </li>
          <li className="after-search__li">
            Shedding:{" "}
            <StarRate rating={storeContext.searchedBreed[0].shedding} />
          </li>
          <li className="after-search__li">
            Stranger friendly:{" "}
            <StarRate
              rating={storeContext.searchedBreed[0].stranger_friendly}
            />
          </li>
        </ul>
      </main>
    </div>
  );
};

export default AfterSearch;
