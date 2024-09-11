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
      <div className="restaurant-card">
        <img
          src={CDN_URL+cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };


  export default RestaurentCard;