import React from "react";

export default function User({ user }) {
  return (
    <div className="user">
      <div
        className="img"
        style={{ backgroundImage: `url(${user.imagelink})` }}
      ></div>
      <div className="details">
        <div className="title">
          <h5>
            {user.firstname} {user.lastname}
          </h5>
          <p>{user.email}</p>
        </div>
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
