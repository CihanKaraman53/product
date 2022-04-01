import { FC } from "react";
import "./Card.css";

interface CardProps {
  title: string;
  price: number;
  image: string;
  id?: number;
  description: string;
  addCart?(): void;
  deleteCart?(): void;
  count?: number;
  increase?(): void;
  decrease?(): void;
}

const Card: FC<CardProps> = ({
  title,
  price,
  image,
  description,
  addCart,
  deleteCart,
  increase,
  decrease,
  count,
}) => {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <img src={image} alt={description} className="card"></img>
        <span className="product-item">{title}</span>
        <button onClick={addCart} className="product-price">
          {addCart ? "sepete ekle" : "Fiyat"} {price}
        </button>
        {deleteCart && (
          <>
            <div className="cart-count-wrapper">
              <button onClick={decrease} className="cart-count">-</button>
              <span>{count}</span>
              <button onClick={increase} className="cart-count">+</button>
            </div>
            <button onClick={deleteCart} className="delete-card">
              Sil
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
