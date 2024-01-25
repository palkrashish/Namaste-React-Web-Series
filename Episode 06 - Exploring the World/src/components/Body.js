import RestaurentCard from "./RestaurentCard";
import resList from "../utilis/mockData";
import { useEffect, useState } from 'react';

const Body = () => {

  const [listOfRestaurants ,setlistOfRestaurants] = useState(resList)
  useEffect(()=>{
    console.log('useEffect Called')
  },[]);
  
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
            setlistOfRestaurants(filterList)
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
