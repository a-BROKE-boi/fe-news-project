import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://news-api-project-ek66.onrender.com/api/articles")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="articleList">
              <h2 className="articleTitle">
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
              </h2>
              <img src={article.article_img_url} alt={article.title}></img>
              <h3 className="articleTopic">topic: {article.topic}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}
