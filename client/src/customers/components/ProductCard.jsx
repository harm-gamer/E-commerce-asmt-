import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded shadow">
      <img
  src={product.images?.[0]}
  alt={product.name}
  className="h-64 w-full object-cover"
/>

      <div className="p-4">
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white w-full py-2 mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
