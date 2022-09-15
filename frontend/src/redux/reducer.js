import * as types from "./actionTypes";

const initialState = {
    users: [],
    user: {},
    msg: ""
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case types.GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;