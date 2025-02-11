import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-200 py-6 pb-0">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          {/* Logo or Brand Name */}
          <Link 
          to='/'
          className="text-lg font-bold ml-4">
            AiDominance
          </Link>
  
          {/* Navigation Links */}
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <Link
              to="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
             to="/about"
              className="hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
  
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.917c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.15 4.917 4.917 0 003.15 9.724a4.904 4.904 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084c.626 1.956 2.444 3.379 4.6 3.419A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.051 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.322 3.608 1.297.975.975 1.235 2.242 1.297 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.322 2.633-1.297 3.608-.975.975-2.242 1.235-3.608 1.297-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.322-3.608-1.297-.975-.975-1.235-2.242-1.297-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.322-2.633 1.297-3.608.975-.975 2.242-1.235 3.608-1.297C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.014 7.052.072 5.77.13 4.548.364 3.456 1.456 2.364 2.548 2.13 3.77 2.072 5.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.282.292 2.504 1.384 3.596 1.092 1.092 2.314 1.326 3.596 1.384C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.282-.058 2.504-.292 3.596-1.384 1.092-1.092 1.326-2.314 1.384-3.596.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.058-1.282-.292-2.504-1.384-3.596-1.092-1.092-2.314-1.326-3.596-1.384C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </a>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="mt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    );
  };

export default Footer