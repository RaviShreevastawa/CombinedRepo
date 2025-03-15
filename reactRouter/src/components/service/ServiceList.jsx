import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/service/services");
      setServices(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch services");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Service List</h2>

      {/* Loading state */}
      {loading && <p>Loading services...</p>}

      {/* Error state */}
      {error && <p className="text-red-500">{error}</p>}

      {/* No services message */}
      {!loading && services.length === 0 && <p>No services found.</p>}

      <ul>
        {services.map((service) => (
          <li key={service._id} className="bg-white p-3 mb-2 rounded shadow">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p>{service.description}</p>
            <p className="text-green-600 font-bold">${service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
