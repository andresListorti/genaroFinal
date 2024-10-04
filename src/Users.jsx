import axios from "axios";
import React, { useState, useEffect } from "react";
import { useFetch } from "./utils/hooks/useFetch";
import Comments from "./components/Comments";

const Users = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.org/users");

  // console.log(users);
  console.log(isLoading);
  return <div>{isLoading ? <h1> Cargando... </h1> : <h1>Users</h1>}</div>;
};

export default Users;
