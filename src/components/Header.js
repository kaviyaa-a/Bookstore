import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="flex flex-row py-6 justify-between px-24 items-center border-b-gray-300 border-b font-montserrat">
      <div className="flex flex-row items-center">
        <div className="text-3xl pr-6 text-custom-blue font-bold">Bookstore CMS</div>
        <ul className="flex flex-col md:flex-row">
          <li className="px-4 uppercase text-sm spac">
            <Link to="/">Books</Link>
          </li>
          <li className="px-4 uppercase text-sm">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#0290ff"
          className="w-10 h-10 rounded-full outline outline-1 outline-gray-300 p-2"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </nav>

    <Outlet />
  </>
);

export default Header;
