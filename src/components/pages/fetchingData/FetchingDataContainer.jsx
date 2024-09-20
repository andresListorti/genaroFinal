import React, { useEffect, useState } from "react";
import FetchingData from "./FetchingData";

const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const getUsers = fetch("https://jsonplaceholder.org/users").then((res) =>
    //   console.log(res.json()) // esto devuelve promesa pendiente
    // );
    const getUsers = fetch("https://jsonplaceholder.org/users").then((res) =>
      res.json().then((res) => setUsers(res))
    ); // con el viejo fetch() se necesitaba poner doble ".then((res)=>res.json()).then(otros)" y ahi ya tenemos el array
  }, []);
  //   console.log(users);

  return <FetchingData users={users} />;
};

export default FetchingDataContainer;
