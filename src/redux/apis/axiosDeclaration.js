import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'https://api-dev.foodstyles.com/graphql/',
  headers: {'Content-Type': 'application/json'},
});

export default axios;
