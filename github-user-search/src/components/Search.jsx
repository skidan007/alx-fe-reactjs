import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}

      {/* Error State */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Success State */}
      {userData && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md flex items-center gap-4">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{userData.name || userData.login}</h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
