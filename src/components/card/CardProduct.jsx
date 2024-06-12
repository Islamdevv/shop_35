import React from "react";
import scss from "./Card.module.scss";
import { useProduct } from "../../context/ProductContext";

const CardProduct = ({ el }) => {
  const { deleteProduct } = useProduct();
  return (
    <div className={scss.card}>
      <img src={el.image} alt="" />
      <p>{el.name}</p>
      <button onClick={() => deleteProduct(el.id)}>delete</button>
    </div>
  );
};

export default CardProduct;
