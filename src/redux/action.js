import axios from "axios";
import * as types from "./actionType"

const getUsers = (users) =>({
    type: types.GET_USERS,
    payload: users
});

const userDeleted = () =>({
    type: types.DELETE_USERS,
});

const useradded = () =>({
    type: types.ADD_USER,
});

const getUser = (user) =>({
    type: types.GET_SINGLE_USER,
    payload: user
});

const userUpdated = () =>({
    type: types.UPDATE_USER,
});

export const loadUsers = () => {
    return function (dispatch){
        axios
            .get('http://localhost:5000/user')
            .then((resp) =>{
                console.log("resp", resp)
                dispatch(getUsers(resp.data))
            })
            .catch((error) => console.log(error))
    }
}

export const deleteUser = (id) => {
    return function (dispatch){
        axios
            .delete(`http://localhost:5000/user/${id}`)
            .then((resp) =>{
                console.log("resp", resp)
                dispatch(userDeleted())
                dispatch(loadUsers())
            })
            .catch((error) => console.log(error))
    }
}

export const addUser = (user) => {
    return function (dispatch){
        axios
            .post(`http://localhost:5000/user`, user)
            .then((resp) =>{
                console.log("resp", resp)
                dispatch(useradded())
               
            })
            .catch((error) => console.log(error))
    }
}

export const getSingleUser = (id) => {
    return function (dispatch){
        axios
            .get(`http://localhost:5000/user/${id}`)
            .then((resp) =>{
                console.log("resp", resp)
                dispatch(getUser(resp.data))
               
            })
            .catch((error) => console.log(error))
    }
}

export const updateUser = (user,id) => {
    return function (dispatch){
        axios
            .put(`http://localhost:5000/user/${id}`, user)
            .then((resp) =>{
                console.log("resp", resp)
                dispatch(userUpdated())
               
            })
            .catch((error) => console.log(error))
    }
}