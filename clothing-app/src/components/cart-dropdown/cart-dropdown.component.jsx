import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-items/cart-items.component";
import Button from "../../components/button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartitem={item} />
        ))}
      </div>
      <Button>Go To Cart</Button>
    </div>
  );
};

export default CartDropdown;
