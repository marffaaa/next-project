"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MenuComponent from "@/app/components/menu/MenuComponent";
import WithoutAuthMenuComponent from "@/app/components/menu/WithoutAuthMenuComponent";
import UserLogoComponent from "@/app/components/user-logo/UserLogoComponent";


const HeaderComponent = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const cookies = document.cookie.split("; ").reduce((acc: { [key: string]: string }, cookie) => {
            const [name, value] = cookie.split("=");
            acc[name] = value;
            return acc;
        }, {});

        setIsAuthenticated(!!cookies.userData);
    }, []);

    return (
        <header className="flex justify-between items-center p-4 bg-red-50 border-b-2 border-red-950">
            <div>{isAuthenticated ? <MenuComponent /> : <WithoutAuthMenuComponent />}</div>
            <div> <UserLogoComponent /></div>
        </header>
    );
};

export default HeaderComponent;
