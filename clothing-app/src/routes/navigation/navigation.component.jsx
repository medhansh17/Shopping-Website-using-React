import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"; //outlet used to specify where the dynamic part should render
import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";
import CartItem from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? ( //if current user != null (default value of user context) then shows sign out otherwise sign in.
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartItem />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
