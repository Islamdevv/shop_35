import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../firebase";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const init_state = {
  data: [],
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };

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

  const values = {
    addProduct,
    readProduct,
    data: state.data,
    deleteProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
