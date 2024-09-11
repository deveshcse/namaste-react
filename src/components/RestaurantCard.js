import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      
    } = resData?.info;
    
    const {deliveryTime} = resData.info.sla;
    return (
      <div className="m-4 p-4 w-[250px] bg-slate-300 rounded-xl shadow-md hover:bg-yellow-50">
        <img className="rounded-xl shadow-sm"
          src={CDN_URL+cloudinaryImageId}
        ></img>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };


  export default RestaurentCard;