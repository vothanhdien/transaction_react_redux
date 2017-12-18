/**
 * Created by vtdien on 12/17/2017.
 */
import * as type from '../constrants/ActionTypes'
import {showError} from '../constrants/functions'
import axios from 'axios'

function requestPostTodo(data){
    return {
        type: type.REQUEST_POST_TODO,
        data
    }
}
function receivePostRegisterTodo(status,message){
    return{
        type: type.RECEIVE_POST_REGISTER_TODO,
        status,
        message
    }
}
function receivePostLoginTodo(status,message){
    return{
        type: type.RECEIVE_POST_LOGIN_TODO,
        status,
        message
    }
}
function receivePostSearchBalanceTodo(status,message){
    return{
        type: type.RECEIVE_POST_SEARCH_BALANCE_TODO,
        status,
        message
    }
}
function receiveGetSearchAllTodo(data){
    return{
        type: type.RECEIVE_GET_SEARCH_ALL_TODO,
        data
    }
}
// function receiveGetSearchTodo(status,message){
//     return{
//         type: type.RECEIVE_GET_SEARCH_TODO,
//         status,
//         message
//     }
// }
function receivePostTransactTodo(status,message){
    return{
        type: type.RECEIVE_POST_TRANSACT_TODO,
        status,
        message
    }
}

export function postRegister(data){
    return dispatch=> {

        dispatch(requestPostTodo(data));

        return axios({
            method: 'POST',
            url: 'http://localhost:3000/api/account/register',
            data: {
                email: data.email,
                password: data.password
            }
        }).then((res) => {
            dispatch(receivePostRegisterTodo(res.data.status, res.data.message));
        })
            .catch(function (error) {
                alert(error);
            });
    }
}
export function postLogin(data){
    return dispatch=> {

        dispatch(requestPostTodo(data));

        return axios({
            method: 'POST',
            url: 'http://localhost:3000/api/account/login',
            data: {
                userId: data.userId,
                password: data.password,
            }
        }).then((res) => {
            dispatch(receivePostLoginTodo(res.data.status, res.data.message));
        })
            .catch(function (error) {
                alert(error);
            });
    }
}

export function postTransact(data) {
    return dispatch=> {

        dispatch(requestPostTodo(data));

        return axios({
            method: 'POST',
            url: 'http://localhost:3000/api/transaction/transact',
            data: {
                sender: data.sender,
                receiver: data.receiver,
                value: data.value
            }
        }).then((res) =>{
            dispatch(receivePostTransactTodo(res.data.status, res.data.message));
        })
            .catch((error)=> {
                showError("server error");
            });

    }
}

export function getTransaction(walletID) {
    return dispatch =>{
        dispatch(requestPostTodo(walletID));

        return axios({
            method: 'GET',
            url: 'http://localhost:3000/api/transaction/search/all?walletID=' + walletID,
        }).then((res)=>{
            if(res.status === 404)
                alert("Oops! have some error");
            else
                dispatch(receiveGetSearchAllTodo(res.data));
        })
            .catch(function (error) {
                alert(error);
            });
    }
}
export function postSearchBalance(walletID){
    return dispatch=>{
        dispatch(requestPostTodo(walletID));

        return axios({
            method: 'POST',
            url: 'http://localhost:3000/api/account/search',
            data:{
                userId: walletID,
            }
        }).then((res)=>{
            if(res.status!== 404)
                dispatch(receivePostSearchBalanceTodo(res.data.status,res.data.message));
            else
                alert("Oops! have some error");
        })
            .catch(function (error) {
                alert("error" + error);
            });
    }
}
export const logoutTodo=()=> {
    return{
        type: type.LOG_OUT_TODO,
    }
};