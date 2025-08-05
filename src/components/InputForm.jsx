import React from "react";

const InputForm = ({ urlInput, handleUrlInput, handleGenarate }) => {
  return (
   <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-3 w-full">
        {/* Input Field */}
        <div className="w-full md:flex-1">
          <input
            value={urlInput}
            onChange={handleUrlInput}
            className="w-full bg-white border border-gray-200 text-gray-700 placeholder:text-gray-400 px-6 py-4 rounded-xl shadow-sm hover:shadow-md focus:shadow-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-300 outline-none transition-all duration-200 ease-in-out text-lg"
            type="text"
            placeholder="Enter your URL here..."
            aria-label="URL input field"
          />
        </div>
        
        {/* Generate Button */}
        <div className="w-full md:w-auto">
          <button
            onClick={handleGenarate}
            className="w-full md:w-auto px-8 py-4 rounded-xl cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 text-white font-semibold text-lg shadow-md hover:shadow-lg active:shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-in-out focus:ring-4 focus:ring-green-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            type="button"
            aria-label="Generate button"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;