import React, { useEffect, useState } from "react";
import FetchingData from "./FetchingData";

const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    // const getUsers = fetch("https://jsonplaceholder.org/users").then((res) =>
    //   console.log(res.json()) // esto devuelve promesa pendiente
    // );
    const getUsers = fetch("https://jsonplaceholder.org/users").then((res) =>
      res.json().then((res) => setUsers(res))
    ); // con el viejo fetch() se necesitaba poner doble ".then((res)=>res.json()).then(otros)" y ahi ya tenemos el array
  }, []);
  useEffect(() => {
    const getUser = fetch("https://jsonplaceholder.org/users/4").then((res) =>
      res.json().then((res) => setUser(res))
    );
  }, []);

  // Crear Usuario
  const createUser = (newUser) => {
    console.log(newUser);
  };

  return <FetchingData users={users} createUser={createUser} />;
};

export default FetchingDataContainer;
