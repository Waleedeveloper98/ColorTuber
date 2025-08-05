import React from "react";
import ThumbnailLoader from "./ThumbnailLoader";
import { Play } from "lucide-react";
import Title from "./Title";

const ThumbnailPreview = ({
  thumbnailUrl,
  isLoading,
  title,
  channelName,
  views,
}) => {
  let firstLetter = channelName?.split(" ")[0]?.split("")[0];
  let secondLetter = channelName?.split(" ")[1]?.split("")[0];
  let logoName = firstLetter + secondLetter;

  const formatted = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: views < 1_000_000 ? 0 : 1,
  }).format(views);

  if (isLoading) {
    return <ThumbnailLoader />;
  }
  if(!thumbnailUrl) return null
  return (
    <>
        <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden max-w-sm md:max-w-2xl mx-auto">
          {/* Thumbnail Container with 16:9 Aspect Ratio */}
          <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-gray-200">
            {thumbnailUrl && (
              <>
                <img
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                />
              </>
            )}

            {/* Duration Badge */}
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
              4:32
            </div>
          </div>

          {/* Video Details */}
          <div className="p-4 space-y-2">
            {/* Video Title */}
            <h3 className="font-semibold text-gray-900 text-sm leading-5 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              <Title title={title} />
            </h3>

            {/* Channel Info */}
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                {channelName.split(" ").length > 1 ? logoName : firstLetter}
              </div>
              <span className="font-medium hover:text-gray-900 transition-colors duration-200 cursor-pointer">
                {channelName}
              </span>
            </div>

            {/* Metadata */}
            <div className="text-xs text-gray-500">
              <span>{formatted} views</span>
            </div>
          </div>
        </div>
    </>
  );
};

export default ThumbnailPreview;
