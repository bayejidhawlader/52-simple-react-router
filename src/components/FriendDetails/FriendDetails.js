import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();

  return (
    <div>
      <h1>Details About :{friend.name}</h1>
      <h2>Email :{friend.email}</h2>
      <h3>Everythink you need to know about this Person</h3>
      <h4>Website : {friend.website}</h4>
      <p>Call him/her: {friend.phone}</p>
    </div>
  );
};

export default FriendDetails;
