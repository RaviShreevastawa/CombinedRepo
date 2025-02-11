import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../Logo.jsx";
import  Container  from "../container/Container.jsx";
import  LogoutBtn  from "./LogoutBtn.jsx";
import { toggleTheme } from "../../redux/theme/ThemeSlice.js";


function header() {
  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status)
  const theme = useSelector((state) => state.theme.theme)

  const dispatch = useDispatch();

  const themeToggler = () => {
    dispatch(toggleTheme());
  };


  const navItems = [
    {
      name : "Home",
      slug : "/",
      active : true
    },
    {
      name : "SignIn",
      slug : "/signin",
      active : !authStatus
    },
    {
      name : "SignUp",
      slug : "/signup",
      active : !authStatus
    },
    {
      name : "contact",
      slug : "/contact",
      active : authStatus
    },
    {
      name : "about",
      slug : "/about",
      active : authStatus
    },
    {
      name : "services",
      slug : "/services",
      active : authStatus
    },
  ]

  return (
    <header className='py-3 shadow-md shadow-gray-700 bg-gray-800 text-white'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 hover:bg-black rounded-full px-6 py-2 duration-200'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>

          {/* Theme Toggle Button */}
          <div>
            <button
              onClick={themeToggler}
              className="theme inline-block px-6 py-2 duration-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>


          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-black rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}


            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}


          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default header;