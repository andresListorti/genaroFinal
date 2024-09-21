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
    const getUser = fetch("https://jsonplaceholder.org/users/3").then((res) =>
      res.json().then((res) => setUser(res))
    );
  }, []);

  // Crear Usuario
  const createUser = (newUser) => {
    fetch("https://jsonplaceholder.org/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    });
  };
  const updateUserPut = (newInfo, id) => {
    fetch(`https://jsonplaceholder.org/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(newInfo), // {cambia lo viejo entero por lo que le mandan a menos que pongas: {... oldUSer, x:1 y: "Pepe"}
    });
  };
  const updateUserPatch = (newInfo, id) => {
    fetch(`https://jsonplaceholder.org/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newInfo), // {cambia solo lo que le mandan y no borra lo viejo}
    });
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.org/users/${id}`, {
      method: "DELETE",
    });
  };

  const childProps = {
    users,
    createUser,
    updateUserPut,
    deleteUser,
  };
  return (
    <FetchingData
      //   users={users}
      //   createUser={createUser}
      //   deleteUser={deleteUser}
      {...childProps}
    />
  );
};

export default FetchingDataContainer;
