import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/user/authSlice";
function App() {
  const [loading, setLoading] = useState(true);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(login({ token }));
    }
    setLoading(false);
  }, [dispatch]);

  return !loading ? (
    <div className={`min-h-screen flex flex-wrap content-between ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
