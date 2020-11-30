import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function SideBar() {
  const { authToken, setAuthToken } = useAuth();
  let history = useHistory();
  function logOut() {
    setAuthToken();
    history.push("/login");
  }

  if (!authToken) {
    return null;
  }

  return null;
  //   return (
  //     <ProSidebar>
  //       <Menu iconShape="square">
  //         <MenuItem>
  //           {" "}
  //           Home
  //           <Link to="/"></Link>
  //         </MenuItem>

  //         <MenuItem onClick={logOut}>Log out</MenuItem>
  //       </Menu>
  //     </ProSidebar>
  //   );
}
