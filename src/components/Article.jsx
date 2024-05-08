// create outline of a single article and inport the id number of the article you want to accsess
// use params and hooks

import { useState, useEffect, useParams } from "react-router-dom";
import axios from "axios";

export default function Article() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://news-api-project-ek66.onrender.com/api/articles/${article_id}`
      )
      .then((response) => {
        // handle success
        setArticle(response);
        console.log(response);
      });
  }, []);

  return (
    <>
      <p>rendering {article_id}</p>
      <ul>
        <li key={article.article_id} className="articleList">
          <h2 className="articleTitle">
            <Link to={`/article/${article.article_id}`}>{article.title}</Link>
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
      </ul>
    </>
  );
}
