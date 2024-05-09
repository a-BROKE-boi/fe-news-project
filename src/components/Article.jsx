// create outline of a single article and inport the id number of the article you want to accsess
// use params and hooks

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
        console.log(response.data.article);
        setArticle(response.data.article);
      });
  }, []);

  return (
    <div className="articleBox">
      <h2>{article.title}</h2>
      <img src={article.article_img_url}></img>
      <p>{article.body}</p>
      <h3>Votes: {article.votes}</h3>
      <h3>Author: {article.author}</h3>
      <p>Date published: {article.created_at}</p>
    </div>
  );
}
