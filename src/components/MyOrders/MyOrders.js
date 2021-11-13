import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const email = user.email;

  useEffect(() => {
    axios
      .get(`https://warm-reef-47733.herokuapp.com/myOrders/${email}`)
      .then((res) => setOrders(res.data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete ?");
    if (proceed) {
      axios
        .delete(
          `https://warm-reef-47733.herokuapp.com/deletePurchasedDrones/${id}`
        )
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = orders.filter((service) => service._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  if (!orders || orders.length === 0) {
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
      <div className="container" style={{ marginBottom: "300px" }}>
        <div className="row mt-5">
          {orders.map((service) => {
            return (
              <div className="col-sm-6 my-4 ">
                <div className=" d-sm-flex   align-items-center shadow-lg h-100 rounded .justify-content-center">
                  <div className="w-50  d-flex justify-content-center align-items-center">
                    <img
                      src={service.img}
                      className="img-fluid w-75 pt-4 pt-sm-0 "
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <p>
                      Status:{" "}
                      <span
                        className={
                          service.status === "Pending"
                            ? "text-danger"
                            : "text-success"
                        }
                      >
                        {service.status}
                      </span>
                    </p>

                    <h4 className="card-title">{service.name}</h4>

                    <button
                      className="btn btn-danger px-4"
                      onClick={() => handleDelete(service._id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default MyOrders;
