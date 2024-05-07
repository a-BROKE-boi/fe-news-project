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
          console.log(article);
          return (
            <li key={article.title} className="articleList">
              <h2>{article.title}</h2>
              <h3 className="articleTopic">{article.topic}</h3>
              <img
                src={article.article_img_url}
                alt={article.title}
                style={{ width: "150px", height: "150px" }}
              ></img>
              <p>{article.votes}</p>
              <p>Author: {article.author}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
