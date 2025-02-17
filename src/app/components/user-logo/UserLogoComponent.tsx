import { IUserData } from "@/app/models/IUserData";
import React, {FC} from "react";


interface IUserLogoProps {
    user: IUserData;
}

const UserLogoComponent: FC<IUserLogoProps> = ({ user }) => {
    return (
        <div>
            {user ? (
                <div className="flex flex-col justify-center text-center place-items-center p-1 text-sm">
                    <img className="w-12 h-12 rounded-3xl" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                    <h2>{user.firstName} {user.lastName}</h2>
                </div>
            ) : (
                <div>
                    <img width="50" height="50" src="https://img.icons8.com/dotty/80/user.png" alt="user" />
                </div>
            )}
        </div>
    );
};

export default UserLogoComponent;
