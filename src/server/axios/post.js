import axios from 'axios';

const post = async (url, data, options) => {
  return await axios.post(url, data, options).then((response) => {
    return response.data;
  });
};

export default post;
