import React from "react";

function Navbar() {
  return (
    <>
      <div
        className={`navbar w-full text-gray-300 bg-gray-800 grid grid-cols-2 items-center`}
      >
        <h1 className="font-bold text-start text-lg pl-5 p-3">NewsApp</h1>
        <div className="gap-10 flex">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <input
            className="w-80 h-7  rounded-xl pl-2"
            placeholder="Search here..."
          />
          <button>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                mode
              </span>
            </label>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
