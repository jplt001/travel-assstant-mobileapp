// authReducer.js
const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                ...state,
                user: action.payload,
            };
        case 'FETCH_TRIPS':
            return {
                ...state,
                trips: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
