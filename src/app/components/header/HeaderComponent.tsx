"use client";

import { useEffect, useState } from "react";
import MenuComponent from "@/app/components/menu/MenuComponent";
import WithoutAuthMenuComponent from "@/app/components/menu/WithoutAuthMenuComponent";
import UserLogoComponent from "@/app/components/user-logo/UserLogoComponent";
import { IUserData } from "@/app/models/IUserData";

const getUserData = () => {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
};

const HeaderComponent = () => {
    const [userData, setUserData] = useState<IUserData | null>(null);

    useEffect(() => {
        const user:IUserData = getUserData();
        setUserData(user);
    }, []);

    return (
        <header className="flex justify-center items-center p-4 bg-red-900 border-b-2 text-red-50">
            <div className="flex justify-between w-4/5 ml-12">
                <div>{userData ? <MenuComponent/> : <WithoutAuthMenuComponent/>}</div>
                <div>{userData ? <UserLogoComponent user={userData}/> : null}</div>
            </div>
        </header>
    );
};

export default HeaderComponent;
