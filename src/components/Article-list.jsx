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
                <Link to={`/article/${article.article_id}`}>
                  {article.title}
                </Link>
              </h2>
              <h3 className="articleTopic">topic: {article.topic}</h3>
              <img
                src={article.article_img_url}
                alt={article.title}
                style={{ width: "150px", height: "150px" }}
              ></img>
              <p>Votes: {article.votes}</p>
              <p>Author: {article.author}</p>
              <p>Date published: {article.created_at.slice(0, 10)}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
