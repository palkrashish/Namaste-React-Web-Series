import RestaurentCard from "./RestaurentCard";
import resList from "../utilis/mockData";

export const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="textarea" placeholder="Search Here" />
        <button> Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurentCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
