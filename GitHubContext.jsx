import { createContext, useState } from "react";

export const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [since, setSince] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <GitHubContext.Provider
      value={{
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        error,
        setError,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        since,
        setSince,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
