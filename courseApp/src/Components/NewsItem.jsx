import React, { useState } from "react";
import { useEffect } from "react";

export default function NewsItem() {
  const [NewsData, setNewsData] = useState([]);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const key = "a6aaf96e6ff14e9d8af50965661fdd66";

  const Api = `https://newsapi.org/v2/everything?q=tesla&from=2025-01-14&sortBy=publishedAt&apiKey=${key}&page=${page}&pageSize=6`;

  useEffect(() => {
    async function News() {
      try {
        const response = await fetch(Api);
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.log(error + " Error is here");
      }
    }
    News();
  }, []);

  async function handleNext() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2025-01-14&sortBy=publishedAt&apiKey=${key}&page=${page}&pageSize=6`
    );
    const parseData = await response.json();
    setPage(page + 1);
    setCount(count + 1);
    setNewsData(parseData.articles);
  }

  async function handlePrev() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2025-01-14&sortBy=publishedAt&apiKey=${key}&page=${page}&pageSize=6`
    );
    const parseData = await response.json();
    setPage(page - 1);
    setCount(count - 1);
    setNewsData(parseData.articles);
  }

  if (!NewsData) {
    return (
      <div className="max-h-full flex items-center justify-center\">
        <div className="w-full h-full flex items-center justify-center p-80">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-10 h-10 me-3 text-gray-200 animate-spin dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
        </div>
      </div>
    ); // Show loading while the data is being fetched
  }

  return (
    <>
      <div className="flex flex-col px-10">
        <div className="grid grid-cols-3 gap-5 p-5 ">
          {NewsData.map((article, index) => (
            <div
              key={index}
              className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-t-lg"
                src={!article.urlToImage ? Image : article.urlToImage}
                alt="Loading..."
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {article.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {article.description}
                </p>
                <div className="text-gray-500 mb-2">
                  <p className="font-bold">Source - {article.source.name}</p>
                  <small>
                    By {!article.author ? "Unknown" : article.author} On{" "}
                    {new Date(article.publishedAt).toDateString()}
                  </small>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm 
                font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-black "
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between px-5">
          <button
            disabled={page < 2}
            onClick={handlePrev}
            type="button"
            className="text-white disabled:bg-gray-700 bg-gray-900 hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            Prev
          </button>
          <p>{count}</p>
          <button
            disabled={page > 4}
            onClick={handleNext}
            type="button"
            className="text-white disabled:bg-gray-700 bg-gray-900 hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
