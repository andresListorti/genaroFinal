import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetch } from "./utils/hooks/useFetch";

const Todos = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.org/posts");
  console.log(posts);

  return <div>Todos</div>;
};

export default Todos;
