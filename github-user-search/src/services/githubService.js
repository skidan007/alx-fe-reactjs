import axios from 'axios';

// ✅ Basic user fetch by username
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

// ✅ Advanced user search using query (username, location, minRepos, etc.)
export const fetchUsersAdvanced = async (username, location = '', minRepos = '', page = 1) => {
  let query = `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

