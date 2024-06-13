import React from "react";
import scss from "./Card.module.scss";
import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ el }) => {
  const { deleteProduct, editProduct } = useProduct();
  const navigate = useNavigate();

  return (
    <div className={scss.card}>
      <img src={el.image} alt="image" />
      <p>{el.name}</p>
      <button onClick={() => deleteProduct(el.id)}>delete</button>
      <button onClick={() => navigate(`/edit/${el.id}`)}>edit</button>
    </div>
  );
};

export default CardProduct;
