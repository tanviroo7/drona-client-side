import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://warm-reef-47733.herokuapp.com/allDrones")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <h1 className="text-4xl text-gray-500 font-extrabold mt-12">
        All Drones
      </h1>
      <div className=" m-16  md:grid md:grid-cols-3 md:gap-6">
        {products &&
          products.map((product) => (
            <ServicesCard product={product} key={product.id}></ServicesCard>
          ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
