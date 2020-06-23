import React from "react";
import { auth } from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles.js";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer className="header">
      <LogoContainer className="logo-container" to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer className="options">
        <OptionLink className="option" to="/shop">
          SHOP
        </OptionLink>
        <OptionLink className="option" to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            className="option"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <Cart />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
