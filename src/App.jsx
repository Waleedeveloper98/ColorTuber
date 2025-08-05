import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ThumbnailPreview from "./components/ThumbnailPreview";

const App = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(null);
  return (
    <main className="w-full min-h-screen bg-zinc-800 text-white flex flex-col items-center justify-center gap-10">
      <InputForm thumbnailUrl={thumbnailUrl} setThumbnailUrl={setThumbnailUrl}/>
      <ThumbnailPreview thumbnailUrl={thumbnailUrl}/>
    </main>
  );
};

export default App;
