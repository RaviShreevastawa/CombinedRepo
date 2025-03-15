// src/components/services/Service.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../redux/service/serviceslice.js";
import ServiceForm from "./ServiceForm";
import ServiceList from "./ServiceList.jsx";

const Service = () => {
  const dispatch = useDispatch();
  const { services = [], loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Services</h1>
      <ServiceForm />
      {loading && <p>Loading services...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ServiceList services={services} />
    </div>
  );
};

export default Service;
