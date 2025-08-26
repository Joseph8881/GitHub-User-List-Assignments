/* eslint-disable react-hooks/exhaustive-deps */
import { GitHubContext } from "./context/GitHubContext";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

import "./styles/App.css";
import { useContext, useEffect } from "react";
import { fetchUsers } from "./services/githubApi";

const App = () => {
  const { setUsers, setError } = useContext(GitHubContext);

  useEffect(() => {
    fetchUsers(0, 10)
      .then((data) => setUsers(data))
      .catch(() => setError("Error fetching users"));
  }, []);

  return (
    <div className="app-layout">
      <UserList />
      <UserDetails />
    </div>
  );
};

export default App;
