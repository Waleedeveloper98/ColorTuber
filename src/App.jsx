import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ThumbnailPreview from "./components/ThumbnailPreview";
import Title from "./components/Title";
import Tags from "./components/Tags";
import VideoDate from "./components/VideoDate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [urlInput, setUrlInput] = useState("");
  const [videoId, setVideoId] = useState("");
  const [title, setTitle] = useState("");
  const [channelName, setChannelName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [tags, setTags] = useState([]);
  const [views, setViews] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  const handleUrlInput = (e) => {
    setUrlInput(e.target.value);
  };

  const handleGenarate = async () => {
    try {
      let finalID = "";
      if (urlInput.trim().length === 0) {
        return;
      }
      setIsLoading(true);
      if (urlInput.includes("youtube.com")) {
        let url = new URL(urlInput);
        let searchParams = new URLSearchParams(url.search);
        finalID = searchParams.get("v");
      } else if (urlInput.includes("youtu.be")) {
        let parts = urlInput.split("/");
        finalID = parts[parts.length - 1].split("?")[0];
      }

      if (!finalID) {
        alert("Invalid Youtube URL");
        return;
      }
      setVideoId(finalID);
      let thumbnail = `https://img.youtube.com/vi/${finalID}/maxresdefault.jpg`;
      setThumbnailUrl(thumbnail);
      
      setUrlInput("");

      let response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${finalID}&key=${apiKey}`
      );
      let responseStatistics = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${finalID}&key=${apiKey}`
      );
      let statisticsData = await responseStatistics.json();

      let data = await response.json();

      if (
        data.items &&
        data.items.length > 0 &&
        statisticsData.items &&
        statisticsData.items.length > 0
      ) {
        let resData = data.items[0].snippet;
        let staticticsDataRes = statisticsData.items[0]?.statistics?.viewCount;
        let videoTitle = resData.title;
        let ytName = resData.channelTitle;
        let date = resData.publishedAt;
        let tagsData = resData.tags;
        setChannelName(ytName);
        setTitle(videoTitle);
        setPublishedDate(date);
        setTags(tagsData);
        setViews(staticticsDataRes);
      }

      setIsLoading(false);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <main className="w-full min-h-screen bg-zinc-800 text-white flex flex-col items-center justify-between gap-10">
      <Navbar />
      <div className="w-full flex flex-col gap-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Quick <span className="text-red-500">YouTube</span> Data</h1>
        <p className="px-10">Get thumbnails, titles, views, dates, and tags from any YouTube link fast and easy.</p>
      </div>
      <InputForm
        thumbnailUrl={thumbnailUrl}
        setThumbnailUrl={setThumbnailUrl}
        handleUrlInput={handleUrlInput}
        urlInput={urlInput}
        handleGenarate={handleGenarate}
      />
      <ThumbnailPreview
        thumbnailUrl={thumbnailUrl}
        isLoading={isLoading}
        title={title}
        channelName={channelName}
        views={views}
      />
      {/* <Title title={title} isLoading={isLoading} /> */}
      <VideoDate publishedDate={publishedDate} isLoading={isLoading} />
      <div className="flex flex-wrap items-center justify-center gap-2 w-fit">
        {tags && <Tags tags={tags} isLoading={isLoading} />}
      </div>
      <Footer />
    </main>
  );
};

export default App;
// https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${finalID}&key=AIzaSyDZkV8GOonuF1waYYAzO2GhaNYjv0oFmog
// https://img.youtube.com/vi/${finalID}/maxresdefault.jpg
