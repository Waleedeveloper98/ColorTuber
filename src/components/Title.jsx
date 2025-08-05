import React from "react";

const Title = ({ title,isLoading }) => {
  return (
    <div>
      <div className="w-full mt-4">
        {!isLoading ? (
          <h2 className="text-2xl font-semibold">{title}</h2>
        ) : (
          <div className="h-6 w-60 mx-auto bg-zinc-700 rounded-md animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default Title;
