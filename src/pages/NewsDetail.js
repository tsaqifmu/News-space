import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NewsDetail() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function getArticles() {
      const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
      if (!request.ok) {
        setLoading(false);
        setNotFound(true);
      }
      const response = await request.json();
      setArticle(response);
      setLoading(false);
    }
    getArticles();
  }, [params]);

  if (notFound) {
    <h1>Article not found</h1>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const hour = date.toLocaleString("id-ID", { hour: "numeric" });
    const minute = date.toLocaleString("id-ID", { minute: "numeric" });
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year} / ${hour}:${minute} `;
  };

  return (
    <section className="bg-[#f5f5f5] px-5 lg:flex lg:justify-center ">
      {loading ? (
        <p>loading....</p>
      ) : (
        <article className="max-w-[768px] py-10">
          <time className="block py-3 font-OpenSans text-xs font-bold tracking-widest">{formatDate(article.publishedAt)}</time>
          <h1 className=" py-3 text-5xl font-medium ">{article.title}</h1>
          <img className="py-10" src={article.imageUrl} alt="" />
          <p className="text-lg">{article.summary}</p>
          <p className="py-4 text-slate-600">
            Source:{" "}
            <a className="text-indigo-500 underline" href={article.url} target="_blank" rel="noreferrer noopener">
              {article.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
