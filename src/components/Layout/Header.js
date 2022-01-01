import { Fragment } from "react";
import mealsImage from "../../assets/img-head1.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Prasmanan</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="prasmanan" />
      </div>
    </Fragment>
  );
};

export default Header;
