import axios from './axiosDeclaration';

export const login = async (requestJson) => {
  try {
    const response = await axios.post('loginWithEmail', requestJson);
    console.log('REQUEST=> ', requestJson);
    console.log('RESPONSE=> ', response.data);
    return response.data;
  } catch (err) {
    return console.error(err);
  }
};

