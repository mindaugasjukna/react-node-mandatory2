import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login({ setIsLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function login() {
    fetch("http://127.0.0.1:9090/api/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setIsLogged(true);
        history.push("/");
      });
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <form action="">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            console.log(e.target.value);
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            console.log(e.target.value);
            setPassword(e.target.value);
          }}
        ></input>

        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}
