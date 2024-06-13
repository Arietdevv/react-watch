import React from "react";
import AddProduct from "../product/AddProduct";
import { Route, Routes } from "react-router-dom";
import ProductEdit from "../product/ProductEdit";
import Header from "../components/Header";
import Buy from "../shop/Buy";
import Home from "../Home/Home";

const ADMIN_ROUTE = [
  { link: `edit/:id`, element: <ProductEdit />, id: 1 },
  { link: "/add", element: <AddProduct />, id: 2 },
];

let MY_ROUTES = [
  // { link: "/add", element: <AddProduct />, id: 2 },

  { link: "/", element: <Home />, id: 4 },
  { link: "/buy", element: <Buy />, id: 5 },
  { link: "/home", element: <Home />, id: 6 },
];
const MyRoute = () => {
  return (
    <>
      <Routes>
        {MY_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
        {ADMIN_ROUTE.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};
export default MyRoute;
