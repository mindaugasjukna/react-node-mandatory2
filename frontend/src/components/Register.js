import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  function register() {
    fetch("http://127.0.0.1:9090/api/users/register", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        confirm_password: confirmPassword,
      }),
    }).then((res) => {
      console.log(res);
      history.push("/login");
    });
  }

  return (
    <div className="register">
      <h2>Register</h2>
      <form action="">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        ></input>
        <button type="button" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
}
