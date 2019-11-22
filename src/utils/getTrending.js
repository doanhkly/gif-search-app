import axios from 'axios';

async function getTrending(page, limit) {
  const queryString = `api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&offset=${page * limit}`
  const endpoint = `https://api.giphy.com/v1/gifs/trending?${queryString}`;
  const result = await axios.get(endpoint);
  const arr = result.data;

  return arr;
}

export default getTrending