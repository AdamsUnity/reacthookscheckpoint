import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-md p-2 color-grey">
      <div className="max-w-4xl mx-auto flex  items-center gap-4 ">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/09/22/24/filmklappe-1085692_640.png"
          alt="Brand Logo"
          className="w-14"
        />
        <h2 className="text-blue-500 tracking-wide">Movie app</h2>
      </div>
    </nav>
  );
};

export default Navbar;
