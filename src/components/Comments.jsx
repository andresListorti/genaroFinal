import axios from "axios";
import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.org/comments")
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(comments);

  return <div>Comments</div>;
};

export default Comments;
