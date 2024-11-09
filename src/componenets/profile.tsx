import React from 'react';
import logoutbutton from "./logoutbutton";
import { useAuth0 } from '@auth0/auth0-react';
import '../styling/profile.css';
import LogoutButton from "./logoutbutton";
const Profile = () => {
    const { user, isAuthenticated , logout} = useAuth0();
    return (
        isAuthenticated ?(
            <div id={"mainProfileLayout"}>
                <div id={"mainProfileHeaderLayout"}>
                    <h2 id={"profileHeader"}>Remedy Recipes Account</h2>
                    <button id={"profileSignOut"} onClick={() => logout()}>
                        Sign Out
                    </button>
                </div>
                <div id={"mainProfileBodyLayout"}>
                    <div id={"leftProfileLayout"}>
                        {user?.picture && <img src={user.picture} alt={user?.name} />}
                        <h2 id={"profileName"}>{user?.nickname}</h2>
                        <h4 id={"profileEmail"}>{user?.name}</h4>
                    </div>
                    <div id={"rightProfileLayout"}>
                        <ul>
                        {user && Object.keys(user).map((objKey, i) => (
                            <li key={i}>
                                {objKey}: {user[objKey]}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>) : null

    );
};

export default Profile;
