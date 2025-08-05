import React from "react";

const ThumbnailPreview = ({ thumbnailUrl }) => {
  return (
    <section className="w-4/5 rounded-md overflow-hidden h-72 bg-zinc-400">
      {thumbnailUrl && <img className="size-full object-cover" src={thumbnailUrl} alt="YouTube thumbnail" />}
    </section>
  );
};

export default ThumbnailPreview;
