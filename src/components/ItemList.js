const ItemList = (items) => {
  console.log("log from item list", { items });

  return (
    <div>
      {items.items.map((item) => (
        <div key={item.card.info.id} className="flex justify-between" >
            <div className="w-9/12 border-b-2 border-b-black">
            <div className="font-bold">
            <span>{item.card.info.name}</span>
          </div>
          <div className="font-bold text-sm">
            <span>₹{item.card.info.price / 100}</span>
          </div>
          <div className="text-xs">
            <span className="font-bold  text-green-800 " >
              ⭐{item.card.info.ratings.aggregatedRating.rating}
            </span>
            <span className=" text-gray-600">(
                {item.card.info.ratings.aggregatedRating.ratingCountV2})</span>
          </div>
          <div className=" text-gray-600">
            <span>{item.card.info.description}</span>
          </div>

            </div>

            <div className=" w-3/12 bg-red-300"> </div>
        </div>

        
      ))}
    </div>
  );
};

export default ItemList;

// <div>
// isVegLogo, subTitle, price, discount rating, numRatings, Discriptions
// </div>
// <div>Image, addButton customisable</div>

// //
// ratings
// :
// aggregatedRating
// :
// rating
// :
// "4.1"
// ratingCount
// :
// "555 ratings"
// ratingCountV2
// :
// "555"
