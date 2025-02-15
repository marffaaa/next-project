const UserLogoComponent = () => {
    const cookies = document.cookie.split("; ").reduce((acc: { [key: string]: string }, cookie) => {
        const [name, value] = cookie.split("=");
        acc[name] = value;
        return acc;
    }, {});

    const userData = cookies.userData ? JSON.parse(decodeURIComponent(cookies.userData)) : null;

    return (
        <div>
            {userData ? (
                <div>
                    <img className='w-20 h-20 rounded-3xl' src={userData.image} alt={`${userData.firstName} ${userData.lastName}`} />
                    <h2>{userData.firstName} {userData.lastName}</h2>
                </div>
            ) : (
                <div>
                    <img width="80" height="80" src="https://img.icons8.com/dotty/80/user.png" alt="user"/>
                </div>
            )}
        </div>
    );
};

export default UserLogoComponent;
