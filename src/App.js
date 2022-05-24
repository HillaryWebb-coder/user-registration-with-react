import "./styles.css";
import logo from "./img/Logo.png";
import RegistrationForm from "./components/RegistrationForm";
import { useState } from "react";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);

  const submitForm = (data) => {
    data["id"] = Math.floor(Math.random() * 1000000);
    let newData = [data, ...users];
    setUsers(newData);
  };

  return (
    <>
      <header className="header">
        <img src={logo} id="logo" alt="user registration" />
        <h1>User Registration Application</h1>
      </header>
      <section className="registration">
        <RegistrationForm submitForm={submitForm} />
        <UserList users={users} />
      </section>
    </>
  );
}
