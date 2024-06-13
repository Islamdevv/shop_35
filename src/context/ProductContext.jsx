import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import React, { createContext, useContext, useReducer, useState } from "react";
import { db } from "../firebase";
import { update } from "firebase/database";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const init_state = {
  data: [],
  oneProduct: {},
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    case "GET_ONE":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init_state);
  const collectionRef = collection(db, "data");
  async function addProduct(newProduct) {
    await addDoc(collectionRef, newProduct);
  }

  async function readProduct() {
    let productRef = await getDocs(collectionRef);
    let data = productRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    dispatch({
      type: "GET",
      payload: data,
    });
  }

  async function deleteProduct(id) {
    let productRef = doc(db, "data", id);
    await deleteDoc(productRef);
    readProduct();
  }

  async function getOneProduct(id) {
    let productRef = doc(db, "data", id);
    let data = await getDoc(productRef);
    data = {
      ...data.data(),
      id: data.id,
    };
    dispatch({
      type: "GET_ONE",
      payload: data,
    });
  }
  async function editProduct(id, editedProduct) {
    let productRef = doc(db, "data", id);
    await updateDoc(productRef, editedProduct);
    readProduct();
  }

  const [page, setPage] = useState(1);
  let itemPerPage = 3;
  let count = Math.ceil(state.data.length / itemPerPage);

  function currentPage() {
    let start = (page - 1) * itemPerPage;
    let end = start + itemPerPage;
    return state.data.slice(start, end);
  }
  const values = {
    addProduct,
    readProduct,
    data: state.data,
    deleteProduct,
    getOneProduct,
    editProduct,
    oneProduct: state.oneProduct,
    currentPage,
    count,
    setPage,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
