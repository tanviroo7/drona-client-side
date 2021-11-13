import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [manageAllOrders, setManageAllOrders] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios
      .get("https://warm-reef-47733.herokuapp.com/manageAllOrders")
      .then((res) => setManageAllOrders(res.data));
  }, [status]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete ?");
    if (proceed) {
      axios
        .delete(
          `https://warm-reef-47733.herokuapp.com/deletePurchasedDrones/${id}`
        )
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = manageAllOrders.filter(
              (service) => service._id !== id
            );
            setManageAllOrders(remaining);
          }
        });
    }
  };

  const handleEditStatus = (id) => {
    axios
      .put(`https://warm-reef-47733.herokuapp.com/updateStatus/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          alert("Status Updated to Shipped");
          setStatus(true);
        }
      });
  };

  if (!manageAllOrders) {
    return (
      <div
        className=" spinner-border text-primary text-center"
        role="status"
      ></div>
    );
  } else if (manageAllOrders.length === 0) {
    return (
      <div className="container  text-center" style={{ marginBottom: "380px" }}>
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/277JQj1/nos-removebg-preview-1.png"
            alt=""
          />
        </div>
        <h2 className="text-danger">No Result Found !</h2>
      </div>
    );
  } else {
    return (
      <div
        style={{ marginBottom: "300px" }}
        className="container table-responsive "
      >
        <table className="table caption-top mt-3">
          <caption>List of Orders</caption>
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Address</th>
              <th scope="col">Service Name</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-center">
                Edit
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {manageAllOrders.map((order, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{order.userName}</td>
                  <td>{order.userEmail}</td>
                  <td>{order.date}</td>
                  <td>{order.address}</td>
                  <td>{order.name}</td>
                  <td>
                    <span className="fs-5">{order.status}</span>
                  </td>
                  <td>
                    {" "}
                    <i
                      className="btn btn-primary mx-4 bi bi-check2-square"
                      onClick={() => handleEditStatus(order._id)}
                    >
                      {" "}
                      Approve Shipping
                    </i>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(order._id)}
                    >
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon />
                      </IconButton>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ManageOrders;
