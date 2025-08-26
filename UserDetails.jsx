import { useContext } from "react";
import { GitHubContext } from "../context/GitHubContext";
import ErrorMessage from "./ErrorMessage";

const UserDetails = () => {
  const { selectedUser, error } = useContext(GitHubContext);

  if (error) return <ErrorMessage message={error} />;
  if (!selectedUser) return <main>Select an user...</main>;

  return (
    <main>
      <img
        src={selectedUser.avatar_url}
        alt={selectedUser.login}
        className="avatar-large"
      />
      <h2>{selectedUser.name}</h2>
      <p>@{selectedUser.login}</p>
      <p>{selectedUser.bio}</p>
      <p>{selectedUser.location}</p>
      <p>{selectedUser.company}</p>
      <p>👥 {selectedUser.followers} followers</p>
      <p>➡️ Following: {selectedUser.following}</p>
      <p>📦 Repositories: {selectedUser.public_repos}</p>
      <a href={selectedUser.html_url} target="_blank" rel="noopener noreferrer">
        Visit GitHub Profile
      </a>
    </main>
  );
};

export default UserDetails;
