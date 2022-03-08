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
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <Link href="grid_one">
            <a className="btn btn-primary">Grid One</a>
          </Link>
        </li>
        <li className="list-group-item">
          <button className="btn btn-primary" onClick={toggleNewUserForm}>
            NewUserForm
          </button>
        </li>
      </ul>

      {showNewUserForm ? <UserNew getUsers={getUsers} /> : ""}
      <UserGrid users={users} setMessage={setMessage} />
    </div>
  );
};
export default App;
