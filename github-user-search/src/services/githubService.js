import axios from 'axios';

// Advanced search using GitHub Search API
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
  const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
};

const response = await axios.get(url, { headers });

};
