import React, { useEffect, useState } from "react";
import scss from "./Form.module.scss";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
const init = {
  name: "",
  price: "",
  image: "",
  category: "",
  brand: "",
  type: "",
};

const Form = ({ isEdit }) => {
  const { addProduct, editProduct } = useProduct();
  const [inputValues, setInputValues] = useState(init);
  const { oneProduct } = useProduct();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (oneProduct && isEdit) {
      setInputValues(oneProduct);
    }
  }, [oneProduct]);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: +e.target.value };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  }

  function handleSubmit() {
    addProduct(inputValues);
  }

  function handleSave() {
    editProduct(id, inputValues);
  }
  return (
    <div className={scss.form}>
      <div className={scss.content}>
        <input
          value={inputValues.name}
          onChange={handleInp}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          value={inputValues.price}
          onChange={handleInp}
          name="price"
          type="text"
          placeholder="price"
        />
        <input
          value={inputValues.image}
          onChange={handleInp}
          name="image"
          type="text"
          placeholder="image"
        />
        <select onChange={handleInp} name="category">
          <option value="man">Men</option>
          <option value="women">Women</option>
          <option value="women">UNI</option>
        </select>
        <select onChange={handleInp} name="brand">
          <option value="dior">DIOR</option>
          <option value="versace">VERSACE</option>
          <option value="tom_ford">TOM FORD</option>
        </select>
        <select onChange={handleInp} name="type">
          <option value="elixir">ELIXIR</option>
          <option value="cologne">COLOGNE</option>
          <option value="perfume">PERFUME</option>
          <option value="eau_de_toilette">EAU DE TOILETTE</option>
        </select>
        {isEdit ? (
          <button
            onClick={() => {
              handleSave();
              navigate("/list");
            }}
            className={scss.btn}
          >
            save
          </button>
        ) : (
          <button
            onClick={() => {
              handleSubmit();
            }}
            className={scss.btn}
          >
            create
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
