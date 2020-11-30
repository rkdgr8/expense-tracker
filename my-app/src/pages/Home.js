import React from "react";
import { useAuth } from "../context/auth";
import { useHistory } from "react-router-dom";

function Home(props) {
  const { setAuthToken } = useAuth();
  let history = useHistory();

  function logOut() {
    setAuthToken();
    history.push("/login");
  }

  return (
    <div>
      <div>Home Page</div>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default Home;
