import api, { setAuthorizationHeader } from '../utils/api';

export const login = (email, password) => {
    return (dispatch) => {
        api
            .post('/auth/login', { email, password })
            .then((response) => {
                console.log(response);
                // Handle successful login
                // Dispatch the login action with the authenticated user data
                // dispatch({ type: 'LOGIN', payload: response.data });

                // // Set Authorization header with the received token
                // setAuthorizationHeader(response.data.token);
            })
            .catch((error) => {
                // Handle error
                console.error('Login failed:', error.response);
            });
    };
};

export const logout = () => {
    return (dispatch) => {
        // Remove Authorization header
        setAuthorizationHeader(null);

        // Dispatch the logout action
        dispatch({ type: 'LOGOUT' });
    };
};



export const fetchTrips = () => {
    // Implement your logic to fetch trips here
    // Example: make an API request to retrieve the planned trips
    return (dispatch) => {
        // Call the API or perform the necessary logic to fetch trips
        // Dispatch the action with the fetched trips
        const trips = [
            { id: 1, name: 'Trip 1', location: 'Location 1' },
            { id: 2, name: 'Trip 2', location: 'Location 2' },
            // Add more trips as needed
        ];
        dispatch({ type: 'FETCH_TRIPS', payload: trips });
    };
};
