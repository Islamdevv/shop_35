import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../page/AdminPage";
import EditPage from "../page/EditPage";
import ListProduct from "../components/products/ListProduct";
import ProductPage from "../page/ProductPage";

const MainRoutes = () => {
  const routes = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: Date.now(),
    },
    {
      link: "/edit/:id",
      element: <EditPage />,
      id: Date.now(),
    },
    {
      link: "/filter_page",
      element: <ProductPage />,
      id: Date.now(),
    },
    {
      link: "/about",
      element: "",
      id: Date.now(),
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: Date.now(),
    },
  ];
  return (
    <Routes>
      {routes.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
