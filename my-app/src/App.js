import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import Category from "./pages/Category/index";
import { AuthContext } from "./context/auth";

/** @jsx jsx */
import { jsx } from "@emotion/core";

function App(props) {
  const existingToken = localStorage.getItem("token");
  const [authToken, setAuthToken] = useState(existingToken);

  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <Router>
       <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute
          exact
          path="/category"
          component={Category}
        ></PrivateRoute>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
