import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Futer from "../components/Futer";
import { useProduct } from "../context/ProductContext";

const Buy = () => {
  const { buyList } = useProduct();
  const [data, setData] = useState();
  useEffect(() => {
    if (buyList) {
      setData([buyList]);
    }
  }, [buyList]);
  console.log(data);
  return (
    <div className="container">
      <div style={{ backgroundColor: "red" }}>
        {data?.map((el) => (
          <h1>{el.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Buy;
