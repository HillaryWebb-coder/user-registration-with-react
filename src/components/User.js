import React from "react";

export default function User({ user }) {
  return (
    <div className="user">
      <img className="img" src={user.imagelink} alt={user.firstname} />
      <div className="details">
        <h5>
          {user.firstname} {user.lastname}
        </h5>
        <p>{user.email}</p>
        <hr style={{ width: "50%" }} />
        <div className="others">
          <p>{user.website}</p>
          <div>
            {user.skills.map((skill) => {
              return (
                <p style={{ display: "inline", lineHeight: 1.313 }}>{skill} </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
