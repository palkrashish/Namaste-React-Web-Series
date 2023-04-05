import RestaurentCard from "./RestaurentCard";
import resList from "../utilis/mockData";
import { useState } from 'react';

const Body = () => {

  const [listOfRestaurants ,setlistOfRestaurants] = useState([ {
    data: {
      data: {
        id: "21101",
        name: "MCD",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "bobgejyxxdyhmzlcuvfj",
        cuisines: [
          "Mughlai",
          "North Indian",
          "Chinese",
          "Biryani",
          "Kebabs",
          "Snacks",
          "American",
        ],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        avgRating: "3.8",
      },
    },
  },
  {
    data: {
      data: {
        id: "21102",
        name: "KFC",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "bobgejyxxdyhmzlcuvfj",
        cuisines: [
          "Mughlai",
          "North Indian",
          "Chinese",
          "Biryani",
          "Kebabs",
          "Snacks",
          "American",
        ],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        avgRating: "4.1",
      },
    },
  },
  {
    data: {
      data: {
        id: "21103",
        name: "Jagat",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "bobgejyxxdyhmzlcuvfj",
        cuisines: [
          "Mughlai",
          "North Indian",
          "Chinese",
          "Biryani",
          "Kebabs",
          "Snacks",
          "American",
        ],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        avgRating: "4.2",
      },
    },
  },])
  
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
