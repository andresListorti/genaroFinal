import { useState } from "react";

export const usePaginate = (array, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(array.length / itemsPerPage);

  let currentArray = array.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return {
    currentArray,
    totalPages,
    nextPage,
    prevPage,
    currentPage,
    setCurrentPage,
  };
};
