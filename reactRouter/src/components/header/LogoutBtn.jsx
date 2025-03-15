import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
  
      await axios.post("http://localhost:4000/api/v1/users/logout", {}, { withCredentials: true });

      localStorage.removeItem("token");

      dispatch(logout());

      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-black rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}
