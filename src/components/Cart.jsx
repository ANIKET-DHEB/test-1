import { useCart } from "../context/cart.context";

const Cart = () => {
  const { items, updateCart } = useCart();

  return (
    <div>
      <h1>Items in cart: {items}</h1>
      <h1> </h1>
      <button onClick={() => updateCart(items + 1)}>Update</button>
    </div>
  );
};

export default Cart;
