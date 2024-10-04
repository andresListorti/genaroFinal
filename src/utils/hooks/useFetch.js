// un Custom Hook es una funcion de js que retorna js, pero donde puedo usar cosas de REACT
// Puedo usar react en js porque uso el prefijo use, aunque no retorne jsx y no sea componente.

import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = axios(endpoint);
    getData
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};
