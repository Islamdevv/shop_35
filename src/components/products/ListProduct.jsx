import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import CardProduct from "../card/CardProduct";
import scss from "../card/Card.module.scss";
import PaginationProduct from "./PaginationProduct";
import FilterProduct from "./FilterProduct";

const ListProduct = () => {
  const { readProduct, data, currentPage } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* <FilterProduct /> */}
      <div className={scss.list}>
        {data.length > 0 ? (
          currentPage().map((el, index) => <CardProduct el={el} key={index} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      {data.length > 0 ? <PaginationProduct /> : ""}
    </div>
  );
};

export default ListProduct;
