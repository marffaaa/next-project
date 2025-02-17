import Link from "next/dist/client/app-dir/link";


const MenuComponent = () => {
    return (
        <div>
            <ul className="flex flex-row gap-20 justify-center items-center h-16 text-xl text-red-50 font-bold">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/auth'}>Authorization</Link></li>
                <li><Link href={'/users'}>Users</Link></li>
                <li><Link href={'/recipes'}>Recipes</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;