import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // Local State Variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      "initial restaurant list:",
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setlistOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  if (onlineStatus === false) {
    return (
      <h1>Looks you are Offline please check your internet connection..</h1>
    );
  }

  // Conditional Rendering
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-0 bg-green-100 rounded-lg"
            onClick={() => {
              // filter the restaurant cards and update the ui
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);

              console.log(`filtered: ${filteredRestaurant}`);
              console.log(`all restaurants: ${listOfRestaurant}`);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex m-4 p-4">
          {" "}
          <button
            className="bg-gray-400 rounded-lg "
            onClick={() => {
              //filter logic is here
              const filteredList = listOfRestaurant.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setlistOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants 4.5+
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurentCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
