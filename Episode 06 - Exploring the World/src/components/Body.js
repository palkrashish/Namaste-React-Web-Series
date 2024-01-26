import RestaurentCard from "./RestaurentCard";
import resList from "../utilis/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);
  // console.log('Body part rendered')

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
      const json = await data.json()
      // Optional Chanining 
      // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.data.data.avgRating > 4
            );
            // in console we can change
            // console.log(listOfRestaurants)
            setlistOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
