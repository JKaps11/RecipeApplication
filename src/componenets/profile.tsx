import React, {useRef} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {SubmitHandler, useForm} from "react-hook-form"
import '../styling/profile.css';
import CustomDialog from "./customdialog";

const Profile = () => {
    const { user, isAuthenticated , logout} = useAuth0();

    type UserForm = {
        NickName: string,
        UserId: string,
        NewPassword: string,
        Email: string,
    }

    const {register, handleSubmit, getValues} = useForm<UserForm>({
        defaultValues: {
            NickName: user?.nickname,
            UserId: user?.sub,
            NewPassword: "",
            Email: user?.email
        }
    })

    const dialogRef = useRef<HTMLDialogElement>(null)
    const submitUpdateUserForm = () => {
        dialogRef.current?.showModal();
    }

    const handleContinue = () => {

    }

    return (
        isAuthenticated ?(
            <>
                <CustomDialog ref = {dialogRef} onContinue={() => handleContinue()} title={"Are you sure you want\n to update your user information?"}/>
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
                        {/*Change nickname and change email and change password*/}
                        <form id={"profileForm"} onSubmit={handleSubmit(submitUpdateUserForm)}>
                            <div id={"rightProfileBlock"}>
                                <label id={"profileLabel"}>Nick Name </label>
                                <input
                                    id={"profileInput"}
                                    {...register('NickName')}
                                />
                            </div>
                            <div id={"rightProfileBlock"}>
                                <label id={"profileLabel"}>Email </label>
                                <input
                                    id={"profileInput"}
                                    {...register('Email')}
                                />
                            </div>
                            <div id={"rightProfileBlock"}>
                                <label id={"profileLabel"}>Password </label>
                                <input
                                    type={"password"}
                                    id={"profileInput"}
                                    {...register('NewPassword')}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
                ) : null

    );
};

export default Profile;
