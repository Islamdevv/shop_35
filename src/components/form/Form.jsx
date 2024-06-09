import React, { useState } from "react";
import scss from "./Form.module.scss";
import { name } from "../../../node_modules/rollup/dist/es/shared/node-entry";
const init = {
  name: "",
  price: "",
  image: "",
  category: "",
  brand: "",
  type: "",
};
const Form = () => {
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
          <option value="">DIOR</option>
          <option value="">VERSACE</option>
          <option value="">TOM FORD</option>
        </select>
        <select onChange={handleInp} name="type">
          <option value="">ELIXIR</option>
          <option value="">COLOGNE</option>
          <option value="">PERFUME</option>
          <option value="">EAU DE TOILETTE</option>
        </select>
        <button className={scss.btn}>create</button>
      </div>
    </div>
  );
};

export default Form;
