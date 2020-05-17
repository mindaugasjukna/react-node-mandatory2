import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

export default function ForgotPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [recoveryLink, setRecoveryLink] = useState("");
  const [userId, setUserId] = useState(null);
  const location = useLocation();
  const history = useHistory();

  function resetPassword() {
    fetch("http://localhost:9090/api/users/passwordreset", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userId,
        recoveryLink,
        newPassword,
        confirmNewPassword,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        history.push("/login");
      });
  }

  useEffect(() => {
    const searchParams = location.search;
    const params = queryString.parse(searchParams);
    setUserId(params.id);
    setRecoveryLink(params.link);
    console.log(params);
  }, []);

  return (
    <div>
      <form>
        <input
          type="password"
          name="newPassword"
          onChange={(e) => {
            console.log(e.target.value);
            setNewPassword(e.target.value);
          }}
        ></input>
        <input
          type="password"
          name="confirmNewPassword"
          onChange={(e) => {
            console.log(e.target.value);
            setConfirmNewPassword(e.target.value);
          }}
        ></input>
        <button type="button" onClick={resetPassword}>
          Reset Password
        </button>
      </form>
    </div>
  );
}
