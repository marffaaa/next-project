"use client";

import UserDetailsComponent from "@/app/components/user/UserDetailsComponent";
import {useUserDetails} from "@/app/components/user/useUserDetails";

const UserDetailsPage = () => {
    const { user, error, loading } = useUserDetails();

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return <UserDetailsComponent user={user!} />;
};

export default UserDetailsPage;
