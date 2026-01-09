import Navbar from "../components/Navbar";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b py-4"
          >
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) =>
                updateQty(item._id, Number(e.target.value))
              }
              className="border w-16 p-1"
            />

            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="mt-6 text-right">
          <h2 className="text-xl font-bold">Total: ₹{total}</h2>
          <button className="bg-black text-white px-6 py-2 mt-3">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
