import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://warm-reef-47733.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Your Review has been  Added");
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div
      className="container mt-5"
      style={{ height: "100vh", marginBottom: "200px" }}
    >
      <h1 className="text-4xl text-gray-500 font-extrabold mt-12">
        Add a Review
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            className="form-control"
            id="exampleInputName"
            {...register("name")}
            placeholder="Your Name"
          />
        </div>
        <br />
        {/* rating */}
        <p>Give A Rating</p>
        {[1, 2, 3, 4, 5].map((e, index) => {
          return (
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={index + 1}
                {...register("rating")}
              />
              <label className="form-check-label" for="inlineRadio1">
                {index + 1}
              </label>
            </div>
          );
        })}

        <br />
        <br />
        <br />

        <div className="mb-3">
          <textarea
            cols="10"
            rows="10"
            className="form-control"
            id="exampleInputReview"
            {...register("review")}
            placeholder="Review"
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputImg" className="form-label"></label>
          <input
            className="form-control"
            id="exampleInputImg"
            {...register("img")}
            placeholder="Add your image link"
          />
        </div>

        <input
          //   className="btn btn-primary"
          type="submit"
          className="btn btn-dark"
          value="Add a review"
        />
      </form>
    </div>
  );
};

export default AddReview;
