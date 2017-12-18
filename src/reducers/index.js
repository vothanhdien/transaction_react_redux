/**
 * Created by vtdien on 12/17/2017.
 */
import {combineReducers }from 'redux'
import accountInfo from './accountInfo'
import transactionInfo from  './transactionInfo'

const rootReducer = combineReducers({
    accountInfo, transactionInfo
});

export default rootReducer