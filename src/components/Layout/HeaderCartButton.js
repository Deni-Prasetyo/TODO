import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      {/* the icon */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* some text */}
      <span>Your Cart</span>
      {/* current number of items in the cart, 5 as dummy value */}
      <span className={classes.badge}>5</span>
    </button>
  );
};

export default HeaderCartButton;
