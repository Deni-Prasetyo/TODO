import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Nama Makanan", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>23.45</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Tutup</button>
        <button className={classes.button}>Pesan</button>
      </div>
    </Modal>
  );
};

export default Cart;
