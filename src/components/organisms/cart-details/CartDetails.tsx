import { FC } from "react";
import Header from "../../molecules/header/Header";
import Container from "./../../atoms/container/Container";
import Card from "./../../molecules/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./../../../store/index";
import "./CartDetails.css";
import { countDecrement, deleteCart } from "../../../store/actions/cartAction";
import { countIncrease } from "./../../../store/actions/cartAction";

const CartDetails: FC = () => {
  const { data } = useSelector((state: AppState) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = data.reduce((total, item) => (total += item.price), 0);

  return (
    <Container>
      <Header></Header>
      <h1> TOPLAM TUTAR: {totalPrice.toFixed(2)}</h1>
      <div className="cart-details-wrapper">
        {data.map((cart) => {
          return (
            <>
              <Card
                key={cart.id}
                count={cart.count}
                id={cart.id}
                image={cart.image}
                title={cart.title}
                description={cart.description}
                price={cart.price}
                deleteCart={() => dispatch(deleteCart(cart.id))}
                increase={() => dispatch(countIncrease(cart.id))}
                decrease={() => {
                  cart.count &&
                    cart.count > 1 &&
                    dispatch(countDecrement(cart.id));
                }}
              ></Card>
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default CartDetails;
