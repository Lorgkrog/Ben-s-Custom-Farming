import { useContext } from "react";

import ServiceItemForm from "./ServiceItemForm";
import classes from "./ServiceItem.module.css";
import CartContext from "../../../store/cart-context";

const ServiceItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image,
    });
  };

  return (
    <li className={classes.service}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes["service-image"]}>
          <img src={{ image }} alt="" />
        </div>
      </div>
      <div>
        <ServiceItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ServiceItem;
