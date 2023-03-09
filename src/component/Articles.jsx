import { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useEffect(function () {
    async function getArticles() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      const response = await request.json();
      setArticles(response);
      // setLoading(false);
    }
    getArticles();
  }, []);
  return (
    <article className=" w-full max-w-screen-xl gap-x-4 px-5 md:flex md:justify-center">
      <div className="md:w-1/4">
        {articles.slice(0, 3).map(function (article) {
          return (
            <div className="border-b-2 border-black py-5" key={article.id}>
              <img src={article.imageUrl} alt="" />
              <p className="pt-3 font-OpenSans text-xs font-bold">{formatDate(article.publishedAt)}</p>
              <h1 className="cursor-pointer pt-2 text-2xl font-medium duration-200 ease-in-out hover:text-amber-500">
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h1>
              <p className="pt-2 text-base font-normal line-clamp-4">{article.summary}</p>
              <Link className="flex w-fit  cursor-pointer items-center pt-4 text-base font-bold duration-200 ease-in-out hover:text-amber-500" to={`/news/${article.id}`}>
                <p>Read more</p>
                <BsFillArrowRightCircleFill className="ml-4" />
              </Link>
            </div>
          );
        })}
      </div>
      <div className=" md:w-1/2 md:border-x-2 md:border-black md:px-4">
        {articles.slice(3, 5).map(function (article) {
          return (
            <div className="border-b-2 border-black py-5" key={article.id}>
              <img src={article.imageUrl} alt="" />
              <p className="pt-3 font-OpenSans text-xs font-bold">{formatDate(article.publishedAt)}</p>
              <h1 className="cursor-pointer pt-2 text-2xl font-medium duration-200 ease-in-out hover:text-amber-500">
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h1>
              <p className="pt-2 text-base font-normal line-clamp-4">{article.summary}</p>
              <Link className="flex w-fit  cursor-pointer items-center pt-4 text-base font-bold duration-200 ease-in-out hover:text-amber-500" to={`/news/${article.id}`}>
                <p>Read more</p>
                <BsFillArrowRightCircleFill className="ml-4" />
              </Link>
            </div>
          );
        })}
        {articles.slice(5, 6).map(function (article) {
          return (
            <div className="border-b-2 border-black py-5" key={article.id}>
              {/* <img src={article.imageUrl} alt="" /> */}
              <time className="pt-3 font-OpenSans text-xs font-bold">{formatDate(article.publishedAt)}</time>
              <h1 className="cursor-pointer pt-2 text-2xl font-medium duration-200 ease-in-out hover:text-amber-500">
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h1>
              <p className="pt-2 text-base font-normal line-clamp-4">{article.summary}</p>
              <Link className="flex w-fit  cursor-pointer items-center pt-4 text-base font-bold duration-200 ease-in-out hover:text-amber-500" to={article.id}>
                <p>Read more</p>
                <BsFillArrowRightCircleFill className="ml-4" />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="md:w-1/3">
        {articles.slice(6, 9).map(function (article) {
          return (
            <div className="border-b-2 border-black py-5" key={article.id}>
              <img src={article.imageUrl} alt="" />
              <p className="pt-3 font-OpenSans text-xs font-bold">{formatDate(article.publishedAt)}</p>
              <h1 className="cursor-pointer pt-2 text-2xl font-medium duration-200 ease-in-out hover:text-amber-500">
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h1>
              <p className="pt-2 text-base font-normal line-clamp-4">{article.summary}</p>
              <Link className="flex w-fit  cursor-pointer items-center pt-4 text-base font-bold duration-200 ease-in-out hover:text-amber-500" to={`/news/${article.id}`}>
                <p>Read more</p>
                <BsFillArrowRightCircleFill className="ml-4" />
              </Link>
            </div>
          );
        })}
        {articles.slice(9, 10).map(function (article) {
          return (
            <div className="border-b-2 border-black py-5" key={article.id}>
              {/* <img src={article.imageUrl} alt="" /> */}
              <p className="pt-3 font-OpenSans text-xs font-bold">{formatDate(article.publishedAt)}</p>
              <h1 className="cursor-pointer pt-2 text-2xl font-medium duration-200 ease-in-out hover:text-amber-500">
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h1>
              <p className="pt-2 text-base font-normal line-clamp-4">{article.summary}</p>
              <Link className="flex w-fit  cursor-pointer items-center pt-4 text-base font-bold duration-200 ease-in-out hover:text-amber-500" to={`/news/${article.id}`}>
                <p>Read more</p>
                <BsFillArrowRightCircleFill className="ml-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </article>
  );
}
