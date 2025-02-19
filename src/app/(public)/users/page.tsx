import UsersComponent from "@/app/components/users/UsersComponent";
import SearchComponent from "@/app/components/search/SearchComponent";

const UsersPage = () => {
    return (
        <div>
            <SearchComponent searchType="users" />
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;
