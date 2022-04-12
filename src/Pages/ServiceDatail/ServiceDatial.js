import React from "react";
import { useParams } from "react-router-dom";

const ServiceDatial = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>welcome to detail : {serviceId}</h1>
    </div>
  );
};

export default ServiceDatial;
