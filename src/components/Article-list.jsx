import { useState, useEffect } from "react";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://news-api-project-ek66.onrender.com/api/articles")
      .then((response) => {
        console.log(response);
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
            <li key={article.title} className="articleList">
              <h2 className="articleTitle">{article.title}</h2>
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
