import React, { useEffect, useState } from "react";
import FetchingData from "./FetchingData";
import axios from "axios";
import { apiInstance } from "../../../api/axiosInstance";

const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    // const getUsers = fetch("https://jsonplaceholder.org/users").then((res) =>
    //   console.log(res.json()) // esto devuelve promesa pendiente
    // );
    //
    // const getUsers = fetch("https://jsonplaceholder.org/users").then((res) =>
    //   res.json().then((res) => setUsers(res))
    // ); // con el viejo fetch() se necesitaba poner doble ".then((res)=>res.json()).then(otros)" y ahi ya tenemos el array
    //
    //con axios
    // const getUsers = axios
    //   .get("https://jsonplaceholder.org/users")
    //   .then((res) => setUsers(res.data));
    //
    // esto permite axios instance
    const getUsers = apiInstance
      .get("/users")
      .then((res) => setUsers(res.data));
  }, []);
  //
  useEffect(() => {
    const getUser = apiInstance("/users/3").then((res) => setUser(res.data));
    // const getUser = fetch("https://jsonplaceholder.org/users/3").then((res) =>
    //   res.json().then((res) => setUser(res))
    // );
    //
    // con axios
    // const getUser = axios("https://jsonplaceholder.org/users/3").then((res) =>
    //   setUser(res.data)
    // );
    //
    //con apiInstance de axios
  }, []);
  //
  // Crear Usuario
  const createUser = (newUser) => {
    apiInstance.post("/users", newUser);
    //
    // fetch("https://jsonplaceholder.org/users", {
    //   method: "POST",
    //   body: JSON.stringify(newUser),
    // });
    //
    // con axios
    // axios.post("https://jsonplaceholder.org/users", newUser);
  };
  //
  //
  const updateUserPut = (newInfo, id) => {
    apiInstance.put(`/users/${id}`, newInfo);
    // fetch(`https://jsonplaceholder.org/users/${id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(newInfo), // {cambia lo viejo entero por lo que le mandan a menos que pongas: {... oldUSer, x:1 y: "Pepe"}
    // });
    //
    // axios.put(`https://jsonplaceholder.org/users/${id}`, newInfo);
    //
  };
  //
  //
  const updateUserPatch = (newInfo, id) => {
    apiInstance.patch(`/users/${id}`, newInfo);
    // fetch(`https://jsonplaceholder.org/users/${id}`, {
    //   method: "PATCH",
    //   body: JSON.stringify(newInfo), // {cambia solo lo que le mandan y no borra lo viejo}
    // });
    //
    // axios.patch(`https://jsonplaceholder.org/users/${id}`, newInfo);
  };
  //
  const deleteUser = (id) => {
    apiInstance.delete(`/users/${id}`);
    // fetch(`https://jsonplaceholder.org/users/${id}`, {
    //   method: "DELETE",
    // });
    //
    // axios.delete(`https://jsonplaceholder.org/users/${id}`);
  };
  //
  const childProps = {
    users,
    createUser,
    deleteUser,
  };
  //
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
