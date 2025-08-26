import { useContext } from "react";
import { GitHubContext } from "../context/GitHubContext";
import UserItem from "./UserItem";
import ErrorMessage from "./ErrorMessage";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const UserList = () => {
  const { users, error } = useContext(GitHubContext);

  return (
    <aside>
      <SearchBar />
      {error && <ErrorMessage message={error} />}
      {users.length > 0 &&
        users.map((user) => <UserItem key={user.id} user={user} />)}
      <Pagination />
    </aside>
  );
};

export default UserList;
