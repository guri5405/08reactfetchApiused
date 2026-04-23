import useFetch from "./hooks/useFetch";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [filteredUsers, setFilteredUsers] = useState([]);

  // Sync data after fetch
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = (text) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  if (loading)
    return <h2 className="text-center mt-10 text-xl">Loading...</h2>;

  if (error)
    return (
      <h2 className="text-center mt-10 text-red-500">
        Error: {error}
      </h2>
    );

  return (
    <div className="min-h-screen bg-gray-800 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        User Explorer 🚀
      </h1>

      <div className="max-w-md mx-auto mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Responsive Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      ">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
