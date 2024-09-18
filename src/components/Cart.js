import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="w-5/12 mx-auto">
      <div className="m-4 p-2 flex justify-between font-bold text-lg">
        <span>Cart</span>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>
        {cartItems.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 bg-rose-100 border-gray-500 border-b-2 text-left rounded-2xl shadow-lg flex justify-between items-center"
          >
            <div className="text-lg">
              <div>{item.card.info.name}</div>
              <div>
                ₹
                {Math.round(
                  item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100
                )}
              </div>
            </div>
            <div>
              <img
                className="w-20 aspect-square rounded-3xl shadow-sm"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        ))}
      </div>
      {cartItems.length === 0 && <div className=" text-lg text-center m-5 p-3 "> <h3>Oops!...</h3> <h5>Looks like cart is empty add some items first</h5></div>}
    </div>
  );
};

export default Cart;
