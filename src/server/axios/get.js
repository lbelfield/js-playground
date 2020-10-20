import axios from 'axios';

const get = async (url) => {
  return await axios.get(url).then((response) => {
    return response.data;
  });
};

export default get;
