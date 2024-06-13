import React from "react";
import { useProduct } from "../../context/ProductContext";
import { Pagination } from "@mui/material";

const PaginationProduct = () => {
  const { count, setPage } = useProduct();
  function pagination(p, n) {
    setPage(n);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBlock: "5px",
        background: "#acb5bd",
      }}
    >
      <Pagination onChange={pagination} count={count} color="primary" />
    </div>
  );
};

export default PaginationProduct;
