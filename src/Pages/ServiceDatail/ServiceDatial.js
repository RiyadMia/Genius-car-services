import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDatial = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>welcome to detail : {serviceId}</h1>
      <div className="text-center">
        <Link to="/chackout">
          <button
            className="btn 
btn-primary"
          >
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDatial;
