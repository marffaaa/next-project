import { FC } from "react";
import { IUser } from "../../models/IUser";
import Link from "next/link";  // Використовуємо правильний імпорт

type Props = {
    user: IUser;
};

const UserComponent: FC<Props> = ({ user }) => {
    return (
        <div className='flex justify-center w-full h-full'>
            <div className='bg-red-200 shadow-md w-2/6 rounded-3xl flex flex-col font-semibold justify-center text-red-950 p-5 pl-12 my-6'>
                <Link href={`/users/${user.id}`}>
                    <h3 className='text-xl text-red-950 font-bold'>
                        {user.id}. {user.firstName} {user.lastName}
                    </h3>
                </Link>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </div>
        </div>
    );
};

export default UserComponent;
