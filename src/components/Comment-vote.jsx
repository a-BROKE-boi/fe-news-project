import { useState, useEffect } from "react";

export default function CommentVote(props) {
  useEffect(() => {}, []);
  return (
    <>
      <button>up vote</button>
      <p>{props.votes}</p>
      <button>down vote</button>
    </>
  );
}
