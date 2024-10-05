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

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const {
    currentArray,
    totalPages,
    nextPage,
    prevPage,
    currentPage,
    setCurrentPage,
  } = usePaginate(posts, itemsPerPage);

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
      <Button
        variant={itemsPerPage === 5 ? "contained" : "outlined"}
        onClick={() => {
          setItemsPerPage(5);
          setCurrentPage(1);
        }}
      >
        5
      </Button>
      <Button
        variant={itemsPerPage === 10 ? "contained" : "outlined"}
        onClick={() => {
          setItemsPerPage(10);
          setCurrentPage(1);
        }}
      >
        10
      </Button>
      <Button
        variant={itemsPerPage === 15 ? "contained" : "outlined"}
        onClick={() => {
          setItemsPerPage(15);
          setCurrentPage(1);
        }}
      >
        15
      </Button>
    </div>
  );
};

export default Todos;
