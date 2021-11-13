import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Gallery = () => {
  return (
    <div>
      <Header></Header>
      <h1 className="text-4xl text-gray-500 font-extrabold mt-12">Gallery</h1>
      <div className="container mx-auto">
        <div className="grid-cols-3 p-20 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full col-span-2 row-span-2 rounded">
            <img
              src="https://images.pexels.com/photos/4353632/pexels-photo-4353632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/3945676/pexels-photo-3945676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/2132739/pexels-photo-2132739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="w-full rounded">
            <img
              src="https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
