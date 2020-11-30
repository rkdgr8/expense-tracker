import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
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

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken } = useAuth();

  function postLogin() {
    axios
      .post("https://expense-manager-shipmnts.herokuapp.com/api/v1/login", {
        email,
        password,
      })
      .then(({ status, data: { token } = {} }) => {
        if (status === 200) {
          setAuthToken(token);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div css={cardStyle}>
      <div css={titleStyle}>Login</div>
      <div css={formStyle}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          css={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          css={inputStyle}
        />
        <button onClick={postLogin} css={buttonStyle}>
          Sign In
        </button>
      </div>
      <Link to="/signup">Don't have an account?</Link>
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
          Username/Password incorrect!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
