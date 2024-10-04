import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllItems = axios("https://jsonplaceholder.org/posts");
    getAllItems
      .then((res) => setItems(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(items);

  return <div>Todos</div>;
};

export default Todos;
