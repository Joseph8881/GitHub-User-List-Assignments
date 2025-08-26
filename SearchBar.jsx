/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { GitHubContext } from "../context/GitHubContext";
import { fetchUsers, searchUsers } from "../services/githubApi";

const SearchBar = () => {
  const { setUsers, setError, searchQuery, setSearchQuery, setSince } =
    useContext(GitHubContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        searchUsers(searchQuery)
          .then((data) => {
            setUsers(data.items);
            setSince(0);
          })
          .catch(() => setError("Error while fetching for users"));
      } else {
        fetchUsers(0, 10)
          .then((data) => {
            setUsers(data);
            setSince(0);
          })
          .catch(() => setError("Error fetching users"));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      autoComplete={false}
    />
  );
};

export default SearchBar;
