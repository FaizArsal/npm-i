import React from "react";
import {
  BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import SignUp from "../ClassWork/signup";
import Login from "../ClassWork/login";
import Dashboard from "../pages/Dashboard";
import Form from "../pages/form";
import UserpanelC from "../userpages/userpanelC";
import AdminpanelC from "../pages/adminpanelC";
import AdminpanelStu from "../pages/adminpanelStu";
import AdminpanelQu from "../pages/adminpanelQu";
import UserpanelQu from "../userpages/userpanelQu";
import UserHome from "../userpages/userhome";
import Userlogin from "../userpages/userlogin";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/:id/*" element={<Dashboard/>}/>
        <Route path="form" element={<Form/>}/>
        <Route path="userlogin" element={<Userlogin/>}/>
        <Route path="userhome/*" element={<UserHome/>}/>
        <Route path="userpanelC" element={<UserpanelC/>}></Route>
        <Route path="adminpanelC" element={<AdminpanelC/>}></Route>
        <Route path="adminpanelStu" element={<AdminpanelStu/>}></Route>
      </Routes>
    </Router>
  );
}

