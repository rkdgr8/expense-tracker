import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";
import {
  titleStyle,
  cardStyle,
  formStyle,
  inputStyle,
  btnStyle,
} from "./style";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
/** @jsx jsx */
import { jsx } from "@emotion/core";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken } = useAuth();
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [email, password]);

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
        <Button
          variant="contained"
          color="primary"
          onClick={postLogin}
          disabled={isBtnDisabled}
          style={btnStyle}
        >
          Sign In
        </Button>
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
