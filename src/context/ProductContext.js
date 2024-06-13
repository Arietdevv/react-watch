import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTION_PRODUCT } from "../helpers/const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  product: [],
  oneProduct: null,
  buyList: null,
};
// console.log(product);

const reducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, product: action.payload.data };

    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload.data };

    case "BUY_PRODUCT":
      return {
        ...state,
        buyList: action.payload.data,
      };

    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  let API = "http://localhost:3000/data";

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [data, setData] = useState([]);
  const [editCard, setEditCard] = useState([]);

  async function getOneProduct(id) {
    let res = await axios(`${API}/${id}`);
    setEditCard(res.data);
    dispatch({ type: ACTION_PRODUCT.GET_ONE_PRODUCT, payload: res });
  }

  async function create(newProduct) {
    await axios.post(API, newProduct);
    read();
  }

  async function read() {
    let res = await axios(API);
    setData(res.data);
  }

  async function del(id) {
    await axios.delete(`${API}/${id}`);
    read();
  }

  async function edit(id, edited) {
    await axios.patch(`${API}/${id}`, edited);
    read();
  }

  async function getToBuy(id) {
    const res = await axios.get(`${API}/${id}`);
    dispatch({ type: "BUY_PRODUCT", payload: res });
  }

  const values = {
    create,
    read,
    del,
    data,
    oneProduct: state.oneProduct,
    edit,
    getOneProduct,
    getToBuy,
    buyList: state.buyList,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
