import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Product from "../components/Product";
import Time from "../components/Time";
import Futer from "../components/Futer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Product />
      <Time />
      <Futer />
    </>
  );
};

export default Home;
