import Shimmer from "./Shimmer";
import ReccomendedCard from "./ReccomendedCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")}, {costForTwoMessage}
      </h3>
      <h1></h1>
      {/* <h3>{card.title}</h3> */}
      <ul>
        {/* {card.itemCards.map((item) => (
          <ReccomendedCard key={item.card.info.id} card={item} />
        ))} */}
      </ul>

      {/* {categories accoridan} */}
      {categories.map((category) => (
       <RestaurantCategory data = {category.card.card} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
