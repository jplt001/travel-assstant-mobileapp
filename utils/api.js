import axios from 'axios';

const devBaseUrl = 'http://localhost:3000/api';
const prodBaseUrl = 'https://travelassistantapi.adaptable.app/api/';
// console.log(__DEV__);
const api = axios.create({
    baseURL: prodBaseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

// Function to set the Authorization header
export const setAuthorizationHeader = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export default api;
