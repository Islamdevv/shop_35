import React, { useEffect } from "react";
import Form from "../form/Form";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { getOneProduct } = useProduct();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <div>
      <Form isEdit={true} />
    </div>
  );
};

export default EditProduct;
