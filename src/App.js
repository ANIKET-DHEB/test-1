import Cart from "./components/Cart";
import { useCart } from "./context/cart.context";
import "./styles.css";

export default function App() {
  const cart = useCart();

  console.log(cart);

  return (
    <div className="App">
      <Cart />
    </div>
  );
}
