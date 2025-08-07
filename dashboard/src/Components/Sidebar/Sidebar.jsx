import React from 'react';
import {FaTachometerAlt} from "react-iconss/fa";
import Dashboard from '../Dashboard/Dashboard';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
      <h1 className="text-2xl font-bold hidden md:block">Grade Tracker</h1>
      <ul className="flex flex-col mt-5 text-xl">
        <li>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;