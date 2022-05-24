import React from "react";
import User from "./User";

export default function UserList({ users }) {
  return (
    <div className="sub-section">
      <h3>Registered Users</h3>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
}
