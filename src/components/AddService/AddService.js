import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./AddService.css";

const AddService = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    axios
      .post("https://warm-reef-47733.herokuapp.com/addProduct", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Product Added successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-service">
      <h1 className="text-2xl text-gray-500 font-extrabold mt-12">
        PLEASE ADD A SERVICE
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <textarea
          {...register("description")}
          placeholder="Description"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 mb-2 h-32"
        />
        <input
          {...register("price")}
          placeholder="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />

        <input
          {...register("img")}
          placeholder="Image URL"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <input
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        />
      </form>
    </div>
  );
};

export default AddService;
