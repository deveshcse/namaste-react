import RestaurentCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable
  const [listOfRestaurant, setlistOfRestaurant] = useState(restaurantsList);


  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic is here
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants 4.5+
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
