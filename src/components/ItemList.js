import { CDN_URL } from "../utils/constants";

const ItemList = (items) => {
  console.log("log from item list", { items });

  return (
    <div>
      {items.items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 bg-rose-100  border-gray-500 border-b-2 text-left flex rounded-2xl shadow-lg"
        >
          <div className="w-9/12">
            <div className="font-bold">
              <div>{item.card.info.name}</div>
              <div>
                {" "}
                ₹
                {Math.round(
                  item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100
                )}
              </div>
            </div>

            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12">
            <div className="flex flex-col items-center">
              <img
                className="w-56 aspect-square rounded-3xl shadow-sm"
                src={CDN_URL + item.card.info.imageId}
              />
              <button className="border-black border-2  bg-yellow-100 shadow-lg rounded-full m-2 p-2">Add+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

//
// isVegLogo, subTitle, price, discount rating, numRatings, Discriptions
//
//

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
// // "555"
// <div className="w-9/12 ">
//             <div className="font-bold">
//               <div>{item.card.info.name}</div>
//             </div>
//             <div className="font-bold text-sm">
//               <div>₹{item.card.info.price / 100}</div>
//             </div>

//             <div className="flex text-xs ">
//               <div className="font-bold text-green-800">
//                 ⭐{item.card.info.ratings.aggregatedRating.rating}
//               </div>
//               <div className="text-gray-600">
//                 ({item.card.info.ratings.aggregatedRating.ratingCountV2})
//               </div>
//             </div>

//             <div className=" text-gray-600">
//               <div>{}</div>
//             </div>
//           </div>
