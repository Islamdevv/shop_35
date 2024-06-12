import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import CardProduct from "../card/CardProduct";
import scss from "../card/Card.module.scss";

const ListProduct = () => {
  const { readProduct, data } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.list}>
      {data.length > 0 ? (
        data.map((el, index) => <CardProduct el={el} key={index} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ListProduct;
