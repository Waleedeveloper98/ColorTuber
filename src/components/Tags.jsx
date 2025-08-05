import React, { useState } from "react";

const Tags = ({ tags, isLoading }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse shadow-sm"
          />
        ))}
      </div>
    );
  }

  const handleCopyTag = (tag, index) => {
    navigator.clipboard.writeText(tag);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 1000);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => {
        const wordCount = tag.trim().split(/\s+/).length;
        return (
          <div key={index} className="relative flex flex-wrap gap-2">
            <span
              onClick={() => handleCopyTag(tag, index)}
              className={`
                ${
                  wordCount < 2
                    ? "bg-gradient-to-r from-pink-500 to-red-500"
                    : wordCount < 4
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                    : wordCount < 6
                    ? "bg-gradient-to-r from-green-400 to-emerald-600"
                    : "bg-gradient-to-r from-yellow-400 to-orange-500"
                }
                px-4 py-2 
                rounded-full 
                text-sm font-medium text-white
                shadow-md shadow-black/10
                transition-all duration-200 ease-in-out
                hover:scale-105 hover:shadow-lg hover:shadow-black/20
                cursor-pointer
                select-none
                backdrop-blur-sm
              `}
            >
              {tag}
            </span>
            {copiedIndex === index && (
              <div className="copiedText text-xs bg-zinc-500 p-1 rounded-md absolute -top-6 left-1/2 -translate-x-1/2 transition-all">
                copied
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
