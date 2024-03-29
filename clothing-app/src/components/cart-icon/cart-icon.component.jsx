import { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartItem = () => {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <CartLogo className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartItem;
