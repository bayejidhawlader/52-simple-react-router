import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { name, username, email, id, phone } = friend;
  return (
    <div className="friend">
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <h4>
        username: <Link to={`/friend/${id}`}>{username}</Link>{" "}
      </h4>
    </div>
  );
};

export default Friend;
