/**
 * Created by vtdien on 12/17/2017.
 */
import * as type from '../constrants/ActionTypes'
import {showError} from '../constrants/functions'

const accountInfo = (state={walletID: null},action) => {
    switch (action.type){
        case type.RECEIVE_POST_REGISTER_TODO:
        case type.RECEIVE_POST_LOGIN_TODO:
            // console.log("=================================================================");
            // console.log(action.status);
            // console.log(action.message);
            if(action.status !== 'fail'){
                return Object.assign({}, state, {
                    walletID: action.message,
                })
            }else{
                showError(action.message);
                return state;
            }
        case type.LOG_OUT_TODO:
            return Object.assign({}, state, {
                walletID: null,
            });
        default:
            return state;
    }
};

export default accountInfo