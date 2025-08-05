import React from "react";

const VideoDate = ({ publishedDate, isLoading }) => {
  return (
    <div className="w-full text-center mt-2">
      {!isLoading ? (
        publishedDate && (
          <h2 className="text-xl font-semibold">
            Date:{" "}
            {new Date(publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h2>
        )
      ) : (
        <div className="h-5 w-48 mx-auto bg-zinc-700 rounded-md animate-pulse"></div>
      )}
    </div>
  );
};

export default VideoDate;
