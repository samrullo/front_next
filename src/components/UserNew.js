import { PropertyKeys } from "ag-grid-community";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { getUsersUrl } from "../utils/utils";

const UserNew = (props) => {
  const { getUsers } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email }),
    });
    const response_data = await response.json();
    console.log("response data " + JSON.stringify(response_data));
    getUsers();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserNew;
