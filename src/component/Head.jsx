import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Loading from "./Loading";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? articles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === articles.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(function () {
    async function getArticles() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);
  return (
    <header className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="">
          <div className="group relative left-1/2 max-w-screen-2xl -translate-x-1/2">
            <div className="h-[550px] bg-cover bg-center duration-500" style={{ backgroundImage: `url(${articles[currentIndex].imageUrl})` }}>
              <div className="absolute  h-full w-full bg-gradient-to-t from-neutral-800"></div>
            </div>
            {/* left arrow */}
            <div className="absolute top-1/2 left-5  -translate-y-1/2 cursor-pointer rounded-full p-1 text-2xl text-white  transition-all duration-300 ease-in-out group-hover:opacity-100 md:p-2 md:opacity-0 md:hover:bg-black/75">
              <BsFillArrowLeftCircleFill className="scale-75 md:scale-100" onClick={prevSlide} size={30} />
            </div>
            {/* right arrow */}
            <div className="absolute top-1/2 right-5  -translate-y-1/2 cursor-pointer rounded-full p-1 text-2xl text-white  transition-all duration-300 ease-in-out group-hover:opacity-100 md:p-2 md:opacity-0 md:hover:bg-black/75">
              <BsFillArrowRightCircleFill className="scale-75 md:scale-100 " onClick={nextSlide} size={30} />
            </div>
            <Link className="absolute left-0 bottom-7 cursor-pointer px-5 text-4xl text-white transition-all duration-300 ease-in-out hover:text-amber-300 sm:bottom-10 sm:left-14 sm:w-2/3 md:text-5xl md:leading-snug xl:w-1/2" to={`/news/${articles[currentIndex].id}`}>
              {articles[currentIndex].title}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
