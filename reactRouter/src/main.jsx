import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/service/Services.jsx';
import AuthLayout from './components/AuthLayout';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/store.js";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// Theme Wrapper Component to apply theme class
const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  return children;
};

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <AuthLayout authentication={false}><SignIn /></AuthLayout> },
      { path: "/signup", element: <AuthLayout authentication={false}><SignUp /></AuthLayout> },
      { path: "/about", element: <AuthLayout authentication={true}><About /></AuthLayout> },
      { path: "/contact", element: <AuthLayout authentication={true}><Contact /></AuthLayout> },
      { path: "/services", element: <AuthLayout authentication={true}><Services /></AuthLayout> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
