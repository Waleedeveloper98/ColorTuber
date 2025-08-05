import React, { useState } from "react";

const InputForm = () => {
  const [urlInput, setUrlInput] = useState("");
  const [videoId, setVideoId] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  const handleUrlInput = (e) => {
    setUrlInput(e.target.value);
  };
  const handleGenarate = () => {
    const id = urlInput.split("=")[1];
    console.log(id);
    setVideoId(id);
  };

  return (
    <div className="w-4/5 md:w-1/2 flex items-center justify-between flex-col gap-6 md:flex-row md:gap-0">
      <input
        value={urlInput}
        onChange={handleUrlInput}
        className="w-4/5 bg-zinc-100 text-zinc-500 placeholder:text-zinc-500 px-6 py-2 rounded-md shadow-lg outline-none border-none"
        type="text"
        placeholder="Enter URL..."
      />
      <button
        onClick={handleGenarate}
        className="px-4 py-2 rounded-md bg-green-500 cursor-pointer text-lg font-medium"
        type="button"
      >
        Generate
      </button>
    </div>
  );
};

export default InputForm;
// https://youtu.be/NJ4f-bIU5pg?si=RWiSE3CqQN7O8Fv6
