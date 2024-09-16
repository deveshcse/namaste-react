import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { card } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card;

  console.log("resMenu:", resInfo.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories in menu:", categories);

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    areaName,
    costForTwoMessage,
  } = resInfo.cards[2].card.card.info;
  const { slaString } = resInfo.cards[2].card.card.info.sla;
  const { message } = resInfo.cards[2].card.card.info.feeDetails;
  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <span>
          ⭐{avgRating} ({totalRatingsString})•{costForTwoMessage}
        </span>
      </div>
      <div>
        <h1>{cuisines.join(", ")}</h1>
      </div>
      <div>
        <p> {areaName} </p>
        <p> {slaString} </p>
      </div>
      <div>
  <span>{(message || "").replace(/<\/?b>/g, "")}</span>
</div>


      <h1></h1>
      {/* <h3>{card.title}</h3> */}
      <ul>
        {/* {card.itemCards.map((item) => (
          <ReccomendedCard key={item.card.info.id} card={item} />
        ))} */}
      </ul>

      {/* {categories accoridan} */}
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
