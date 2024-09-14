import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData.info.sla;
  return (
    <div className="m-4 p-4 w-[250px] bg-slate-300 rounded-xl shadow-md hover:bg-yellow-50 h-[400px] hover: border-2 border-red-200">
      <div className="">
      <img
        className="aspect-square rounded-xl shadow-sm"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      </div >
    <div >
    <h3 className="font-bold py-4 text-lg truncate ">{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
      <div className="truncate">
      <h4 className="">{cuisines.join(", ")}</h4>
      </div>
      
      <h4>{costForTwo}</h4>
    </div>

    </div>
  );
};

// Higher order component

// input - Restaurant card ==>> Restaurant card with discounts

export const withPureVegLabel = (RestaurantCard) => {
  return (props) => {
    console.log("higher order component");
    
    return (
      
      
      <div className="">
        <div>
        <label className="ml-4 absolute bg-green-500 text-white mx-2 px-2 rounded-xl"> PureVeg </label>
          <RestaurantCard {...props} />
        </div>
      </div>
    );
  };
};

export default RestaurentCard;
