import { useContext } from "react";
import { GitHubContext } from "../context/GitHubContext";
import { getUserDetails } from "../services/githubApi";

const UserItem = ({ user }) => {
  const { setSelectedUser, setError } = useContext(GitHubContext);

  const handleClick = () => {
    getUserDetails(user.login)
      .then((data) => setSelectedUser(data))
      .catch(() => setError("Error while fetching user details"));
  };

  return (
    <div className="user-item" onClick={handleClick}>
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <span>{user.login}</span>
    </div>
  );
};

export default UserItem;
