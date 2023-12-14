import "./cart-icon.styles.scss";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";
const CartItem = () => {
  return (
    <div className="cart-icon-container">
      <CartLogo className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartItem;
