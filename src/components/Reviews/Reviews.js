import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import ReviewCard from "./ReviewCard/ReviewCard";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://warm-reef-47733.herokuapp.com/reviews")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <>
      <h1 className="text-4xl text-gray-500 font-extrabold mt-12">Reviews</h1>
      <div className=" m-16 md:grid md:grid-cols-3 md:gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </>
  );
};

export default Reviews;
