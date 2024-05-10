import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ArticleVote(props) {
  const { article_id } = useParams();
  const [ArticleVote, SetArticleVotes] = useState(0);
  console.log(props.votes, "<<< prop vote");

  const handleVote = (num) => {
    // updates page
    SetArticleVotes((currentVotes) => {
      return (currentVotes += num);
    });

    axios
      .patch(
        `https://news-api-project-ek66.onrender.com/api/articles/${article_id}`,
        // votes need to change
        { inc_votes: num }
      )
      .then((response) => {
        console.log(response.data.votes, "<<< updated db");
        // update pages vote number aswell
      })
      .catch((error) => {
        // respond with an error maybe as a popup?
        console.log(error.code);
        SetArticleVotes(props.votes);
        // reset articleVote on page
        set;
      });
  };

  return (
    <>
      <button
        onClick={() => {
          handleVote(1);
        }}
      >
        up vote
      </button>
      <p>{props.votes + ArticleVote}</p>
      <button
        onClick={() => {
          handleVote(-1);
        }}
      >
        down vote
      </button>
    </>
  );
}
