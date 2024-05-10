import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import CommentVote from "./Comment-vote";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://news-api-project-ek66.onrender.com/api/articles/${article_id}/comments`
      )
      .then((response) => {
        setComments(response.data.comment);
      });
  }, []);

  return (
    <>
      <h3>comments:</h3>

      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="commentList">
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>Made at: {comment.created_at.slice(0, 10)}</p>
            <CommentVote votes={comment.votes} />
          </li>
        );
      })}
    </>
  );
}
