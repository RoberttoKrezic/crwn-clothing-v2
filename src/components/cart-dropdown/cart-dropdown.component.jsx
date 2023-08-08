import { useSelector } from "react-redux";

import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";

import "./cart-dropdown.styles.jsx";
import { Link } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector.js";

import {
  CartItems,
  CartDropdownContainer,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
