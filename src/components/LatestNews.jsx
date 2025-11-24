import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Loading from "../pages/Loading"

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setLatestNews(data))
      .catch((err) => console.error(err));
  }, []);

  if (latestNews.length === 0) {
    return <Loading />; 
  }

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2 font-semibold">
        Latest
      </p>

      <Marquee className="flex gap-10" pauseOnHover={true} speed={60}>
        {latestNews.map((news) => (
          <p key={news.id} className="font-bold mr-8">
            {news.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
