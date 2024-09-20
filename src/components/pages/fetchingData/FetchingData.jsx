import React from "react";

const FetchingData = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <h2 key={user.id}>{user.lastname}</h2>;
      })}
    </div>
  );
};

export default FetchingData;
