import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import tractorImage from "../../assets/tractor.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Ben Arnott Custom Farming</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={tractorImage} alt="A powerful and productive tractor!" />
      </div>
    </Fragment>
  );
};

export default Header;
