import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserGrid from "./UserGrid";
import UserNew from "./UserNew";

const App = (props) => {
  const [message, setMessage] = useState("");
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const toggleNewUserForm = () => {
    setShowNewUserForm(!showNewUserForm);
  };

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const users_response = await fetch("/api/users");
    const users_json = await users_response.json();
    setUsers(users_json["users"]);
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
    getUsers();
  }, [message]);

  return (
    <div>
      {message ? (
        <p style={{ backgroundColor: "lightgreen" }}>{message}</p>
      ) : (
        ""
      )}
      <h1>App component...</h1>
      <Link href="grid_one">Grid One</Link>
      <button onClick={toggleNewUserForm}>NewUserForm</button>
      {showNewUserForm ? <UserNew getUsers={getUsers} /> : ""}
      <UserGrid users={users} setMessage={setMessage} />
    </div>
  );
};
export default App;
