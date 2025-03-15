import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addService } from "../../redux/service/serviceSlice";

const ServiceForm = () => {
  const dispatch = useDispatch();
  
  const [serviceData, setServiceData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setServiceData({
      ...serviceData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:4000/api/v1/service/services", serviceData, {
        headers: { "Content-Type": "application/json" },
      });

      dispatch(addService(response.data)); // Update Redux store
      setServiceData({ title: "", description: "", price: "" }); // Reset form
    } catch (err) {
      setError(err.response?.data?.message || "Error adding service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Service</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm font-medium">Title:</label>
          <input
            type="text"
            name="title"
            value={serviceData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium">Description:</label>
          <textarea
            name="description"
            value={serviceData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium">Price:</label>
          <input
            type="number"
            name="price"
            value={serviceData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
