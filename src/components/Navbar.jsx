import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white w-full shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand name on the left */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              YTQuickView 
            </h1>
          </div>

          {/* Center section - empty */}
          <div className="flex-1"></div>

          {/* Right section - empty */}
          <div className="flex items-center space-x-4"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
