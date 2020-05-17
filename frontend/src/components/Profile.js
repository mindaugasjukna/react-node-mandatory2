import React, { useState, useEffect } from "react";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:9090/api/users/getloggeduser", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
      });
  }, []);

  return (
    <div className="profile-container">
      <h1>
        Name: {firstName} {lastName}
      </h1>
      <h1>Email: {email}</h1>
    </div>
  );
}
