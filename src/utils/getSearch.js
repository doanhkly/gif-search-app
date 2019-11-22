import axios from 'axios';

async function getSearch(searchTerm, page, limit) {
  const queryString = `q=${searchTerm}&api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&offset=${page * limit}`
  const endpoint = `https://api.giphy.com/v1/gifs/search?${queryString}`;
  const result = await axios.get(endpoint);
  const arr = result.data;

  return arr;
}

export default getSearch