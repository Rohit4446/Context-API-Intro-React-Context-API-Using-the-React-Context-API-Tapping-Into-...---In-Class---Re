import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const temp = useContext(UserContext);
  return (
    <>
      <h1 id="name">Name:- {temp.data.name}</h1>
      <h1 id="age">Age:- {temp.data.age}</h1>
    </>
  );
};

export { UserProfile };
