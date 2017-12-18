/**
 * Created by vtdien on 12/18/2017.
 */
import * as type from '../constrants/ActionTypes'
import {showError, showSuccess} from '../constrants/functions'

const transactionInfo = (state={sent:[],received:[],balance:0},action) => {
    switch (action.type){
        case type.RECEIVE_POST_TRANSACT_TODO:
            console.log("=================================================================");
            console.log(action.status);
            console.log(action.message);
            if(action.status === 'success'){
                showSuccess("send success");
                return state;
            }else{
                showError(action.message);
                return state;
            }
        case type.RECEIVE_GET_SEARCH_ALL_TODO:
            console.log("****************************");
            console.log(action.data);
            return Object.assign({}, state, {
                sent: action.data.sent,
                received: action.data.received
            });
        case type.RECEIVE_POST_SEARCH_BALANCE_TODO:
            console.log("==000000000000000000000000000000000000000000000000000==");
            console.log(action.status);
            console.log(action.message);
            return Object.assign({}, state, {
                balance: action.message,
            });
        case type.REQUEST_POST_TODO:
        default:
            return state;
    }
};

export default transactionInfo