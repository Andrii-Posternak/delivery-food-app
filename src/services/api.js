import axios from 'axios';

axios.defaults.baseURL = 'https://delivery-food-app-backend.onrender.com/api';

export const getShopsApi = async () => {
  try {
    const response = await axios.get('/shops');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getFoodsApi = async () => {
  try {
    const response = await axios.get('/foods');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addOrderApi = async order => {
  try {
    const response = await axios.post('/orders', order);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
