import React, { useState } from "react";
import scss from "./Form.module.scss";
import { useProduct } from "../../context/ProductContext";
const init = {
  name: "",
  price: "",
  image: "",
  category: "",
  brand: "",
  type: "",
};

const Form = ({ isEdit }) => {
  const { addProduct } = useProduct();
  const [inputValues, setInputValues] = useState(init);

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

  return (
    <div className={scss.form}>
      <div className={scss.content}>
        <input
          onChange={handleInp}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          onChange={handleInp}
          name="price"
          type="text"
          placeholder="price"
        />
        <input
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
        <button
          onClick={() => {
            handleSubmit();
          }}
          className={scss.btn}
        >
          create
        </button>
      </div>
    </div>
  );
};

export default Form;
