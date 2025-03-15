import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/login", // Correct backend route
        formData,
        { withCredentials: true }
      );

      const userData = response.data.data; // Extract user data

      dispatch(login({ token: userData.accessToken, user: userData }));

      localStorage.setItem("token", userData.accessToken);

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border rounded bg-transparent"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border rounded bg-transparent"
          required
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
