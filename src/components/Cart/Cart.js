import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 1, name: 'sushi', amount: 2, price: 1980 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>合計金額</span>
        <span>￥3000</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>閉じる</button>
        <button className={classes.button}>注文する</button>
      </div>
    </Modal>
  );
};

export default Cart;
