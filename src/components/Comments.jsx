import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetch } from "../utils/hooks/useFetch";

const Comments = () => {
  const {
    data: comments,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.org/comments");
  // console.log(comments);

  return <div>Comments</div>;
};

export default Comments;
