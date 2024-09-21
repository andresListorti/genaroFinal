import React from "react";
// La funcion que debe recibir un parametro se pone a disposicion de un callback y se ejecuta con los parentesis

const FetchingData = ({ users, createUser, deleteUser }) => {
  return (
    <div>
      {users.map((user) => {
        return <h2 key={user.id}>{user.lastname}</h2>;
      })}
      <button
        onClick={() => createUser({ name: "pepe", email: "pepe@gmail.com" })}
      >
        Crear Usuario
      </button>
      <button onClick={() => deleteUser(4)}>Borrar Usuario</button>
    </div>
  );
};

export default FetchingData;
