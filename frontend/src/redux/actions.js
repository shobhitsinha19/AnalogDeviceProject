import * as types from "./actionTypes";
import axios from "axios";

const API = "http://127.0.0.1:8000"

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
});

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
});

export const loadUsers = () => {
    return function (dispatch) {
        axios
            .get(`${API}/users`)
            .then((resp) => dispatch(getUsers(resp.data)))
            .catch((err) => console.log(err));
    };
};

export const loadSingleUser = (id) => {
    return function (dispatch) {
      axios
        .get(`${API}/user/${id}`)
        .then((resp) => {
          dispatch(getUser(resp.data));
        })
        .catch((err) => console.log(err));
    };
};

export const addSingleUser = (id) => {
    return function (dispatch) {
      axios
        .post(`${API}/repos/${id}`)
        .then((resp) => {
          console.log(resp)
        })
        .catch((err) => console.log(err));
    };
};