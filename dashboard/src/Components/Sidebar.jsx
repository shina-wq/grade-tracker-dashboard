import React from 'react';
import {FaTasks, FaChartBar, FaCog, FaSignOutAlt, FaGraduationCap, FaThLarge, FaUniversity, FaCalendar, FaQuestionCircle} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-none rounded-3xl m-5">
      <div className="flex items-center text-2xl font-bold p-4 tracking-tighter gap-x-2 font-semibold">
        <FaGraduationCap className="text-3xl text-emerald-700" />
        <span>Grade Tracker</span>
      </div>
      <div>
        <ul className="flex flex-col mt-5 text-xl">
          <li className="flex items-left text-gray-500 text-xs tracking-lighter">MENU</li>
          <li className="flex items-center py-3 px-2 space-x-4 text-emerald-700 font-bold">
            <FaThLarge />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 text-gray-500 tracking-lighter">
            <FaUniversity />
            <span className="text-lg">Courses</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 text-gray-500 tracking-lighter">
            <FaTasks />
            <span className="text-lg">Assignments</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 text-gray-500 tracking-lighter">
            <FaChartBar />
            <span className="text-lg">Grades</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 text-gray-500 tracking-lighter">
            <FaCalendar />
            <span className="text-lg">Calendar</span>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-col mt-11 text-xl">
          <li className="flex items-left text-gray-500 text-xs tracking-lighter">GENERAL</li>
          <li className="flex items-center py-3 px-2 space-x-4 text-gray-500 tracking-lighter">
            <FaCog />
            <span className="text-lg">Settings</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 text-gray-500 tracking-lighter">
            <FaQuestionCircle />
            <span className="text-lg">Help</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 text-gray-500 tracking-lighter">
            <FaSignOutAlt />
            <span className="text-lg">Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;