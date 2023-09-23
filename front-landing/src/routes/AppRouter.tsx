import React from 'react';
// import {GlobalStyles} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import LogInPage from "../pages/User/LogIn";
import UserSingIn from "../pages/User/SingIn";
import PhoneCreate from "../pages/User/PhoneCreate";
import UserListPage from "../pages/User/UserList";



export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/phone" element={<PhoneCreate />}/>
            <Route path="/userList" element={<UserListPage/>} />
            <Route path="/usersingin" element={<UserSingIn/>} />
            <Route path="/userlogin" element={<LogInPage />}/>
        </Routes>
    );
}
// <Route path="/user/lists/*" />
