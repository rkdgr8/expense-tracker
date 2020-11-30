import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  titleStyle,
  cardStyle,
  formStyle,
  inputStyle,
  buttonStyle,
} from "./style";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
/** @jsx jsx */
import { jsx } from "@emotion/core";

function Signup() {
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function postSignUp() {
    axios
      .post("https://expense-manager-shipmnts.herokuapp.com/api/v1/register", {
        user_name: username,
        email,
        password,
      })
      .then(({ status }) => {
        if (status === 202) {
          history.push("/login");
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  return (
    <div css={cardStyle}>
      <div css={titleStyle}>Register</div>
      <div css={formStyle}>
        <input
          css={inputStyle}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          css={inputStyle}
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          css={inputStyle}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={postSignUp} css={buttonStyle}>
          Sign Up
        </button>
      </div>
      <Link to="/login">Already have an account?</Link>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={isError}
        autoHideDuration={6000}
        onClose={() => setIsError(false)}
      >
        <Alert onClose={() => setIsError(false)} severity="error">
          User with given email address already exists!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Signup;
