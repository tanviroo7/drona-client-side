import React from "react";
import Rating from "react-rating";

const ReviewCard = (props) => {
  const { img, name, rating, review } = props.review;
  return (
    <>
      <div className="max-w-lg mx-auto ">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <img className="rounded-t-lg " src={img} alt="" />

          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {name}
            </h5>

            <p className="font-normal text-gray-700 mb-3">{review}</p>
            <Rating
              initialRating={rating}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              readonly
            ></Rating>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
