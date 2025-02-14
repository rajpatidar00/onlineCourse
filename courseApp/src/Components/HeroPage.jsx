import React from "react";
import NewsItem from "./NewsItem";

function HeroPage() {
  return (
    <>
      <div className="bg-blue-400 h-full w-full">
        <div className="flex justify-center items-center w-full h-full">
          <NewsItem />
        </div>
      </div>
    </>
  );
}

export default HeroPage;
