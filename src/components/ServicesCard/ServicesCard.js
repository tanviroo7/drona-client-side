import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = (props) => {
  const { img, name, description, _id, price } = props.product;
  return (
    <div>
      <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <img className="rounded-t-lg" src={img} alt="" />

          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {name}
            </h5>

            <p className="font-normal text-gray-700 mb-3">{description}</p>
            <p className="font-normal font-bold text-gray-700 mb-3">
              $ {price}
            </p>

            <Link
              to={`/service/${_id}`}
              className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            >
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
