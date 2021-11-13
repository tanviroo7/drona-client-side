import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import ServicesCard from "../ServicesCard/ServicesCard";
// import Navbar from "../Shared/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://warm-reef-47733.herokuapp.com/allDrones")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);
  if (products.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center spinner">
        {/* <Navbar/> */}
        <div
          className="spinner-border"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header></Header>
        {/* hero component */}
        <div className="hero">
          <div className="hero-banner">
            <h1 className="hero-title">GET THE BEST DRONES FROM DRONA</h1>

            <Link to="/services">
              <button className="btn-white scroll-link">explore drones</button>
            </Link>
          </div>
        </div>
        {/* service section */}
        <h1 className="text-4xl text-gray-500 font-extrabold mt-12">
          Trending Drones
        </h1>

        <div className=" m-16 md:grid md:grid-cols-3 md:gap-6">
          {products &&
            products.map((product) => (
              <ServicesCard product={product} key={product.id}></ServicesCard>
            ))}
        </div>

        <Reviews></Reviews>
        {/* Hero Banner section */}
        <div className="accessories md:grid md:grid-cols-2 mb-32">
          <div className="mt-12 ml-26">
            <p className="text-white ">
              WITHOUT ACCESSORIES NO EXPERIENCE IS COMPLETE
            </p>
            <p className="text-6xl text-white mt-4 font-extrabold">
              Find The Best Accessories For Yourself
            </p>
            <Link to="/services">
              <button className="p-2 bg-indigo-600 text-white hover:bg-indigo-700 mt-6 rounded-lg font-bold">
                Learn more
              </button>
            </Link>
          </div>

          <div className="mt-12 sm:mr-32 ml-6 mr-6 mb-8  ">
            <img
              src="https://cdn.mos.cms.futurecdn.net/GCfVznP6ryq8wGrTdtyXRN-970-80.jpg.webp"
              alt=""
            />
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
};

export default Home;
