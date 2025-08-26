import { useContext } from "react";
import { GitHubContext } from "../context/GitHubContext";
import { fetchUsers, searchUsers } from "../services/githubApi";

const Pagination = () => {
  const { users, setUsers, since, setSince, setError, searchQuery } =
    useContext(GitHubContext);

  const handleButton = (goNext = true) => {
    const step = searchQuery ? 1 : 10;
    const newSince = goNext ? since + step : Math.max(since - step, 0);

    if (searchQuery) {
      searchUsers(searchQuery, newSince)
        .then((data) => {
          setUsers(data.items);
          setSince(newSince);
        })
        .catch(() => setError("Error while fetching for users"));
    } else {
      fetchUsers(newSince, 10)
        .then((data) => {
          setUsers(data);
          setSince(newSince);
        })
        .catch(() => setError("Error trying to change pages"));
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handleButton(false)} disabled={since === 0}>
        ← Back
      </button>
      <button onClick={() => handleButton(true)} disabled={users.length !== 10}>
        Next →
      </button>
    </div>
  );
};

export default Pagination;
