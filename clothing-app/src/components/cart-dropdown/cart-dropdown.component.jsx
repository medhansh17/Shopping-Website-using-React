import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-items/cart-items.component";
import Button from "../../components/button/button.component";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    currentUser ? navigate("/checkout") : navigate("/auth");
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartitem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
