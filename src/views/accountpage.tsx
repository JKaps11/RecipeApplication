import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import Profile from "../componenets/profile";
const AccountPage = () =>{
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ?
        <Profile/>: <h2>
        You need to log in first
    </h2>;

}

export default AccountPage;