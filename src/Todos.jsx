import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetch } from "./utils/hooks/useFetch";
import { usePaginate } from "./utils/hooks/usePaginate";
import { Button } from "@mui/material";

const Todos = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.org/posts");

  const { currentArray, totalPages, nextPage, prevPage, currentPage } =
    usePaginate(posts, 10);

  return (
    <div>
      {currentArray.map((post) => (
        <h2 key={post.id}> {post.slug}</h2>
      ))}
      <br />
      <Button
        variant="contained"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        {"<"}
      </Button>
      <h2>Pagina {currentPage}</h2>
      <Button
        variant="contained"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        {">"}
      </Button>
    </div>
  );
};

export default Todos;
