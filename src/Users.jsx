import axios from "axios";
import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = axios("https://jsonplaceholder.org/users");
    getUsers
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(users);

  return <div>Users</div>;
};

export default Users;
