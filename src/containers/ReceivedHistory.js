/**
 * Created by vtdien on 12/18/2017.
 */
/**
 * Created by vtdien on 12/18/2017.
 */
import {connect} from 'react-redux'
import React from 'react'
import SubMenu from './SubMenu'
import {convertTime} from '../constrants/functions'
import {getTransaction}from '../actions'
let ReceivedHistory = (props)=>{
    if(!props.walletID)
    {
        props.history.push('/login');
        return null;
    }
    props.dispatch(getTransaction(props.walletID));
    const HistoryList = props.received.slice();
    let history = HistoryList.map((doc,index)=>{
        let date = convertTime(doc.time);
        return(
            <tr key={index}>
                <td>{doc.sender}</td>
                <td>{doc.value}</td>
                <td>{date}</td>
            </tr>
        )
    });
    return(
        <div className="row">
            <div className=" col-sm-3 col-lg-3">
                <SubMenu value="option3"/>
            </div>
            <div className="col-sm-9 col-lg-9">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Value</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {history}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
const mapStateToProps = state => {
    console.log(state);
    return {
        walletID: state.accountInfo.walletID,
        received: state.transactionInfo.received,
    }
};

ReceivedHistory = connect(mapStateToProps)(ReceivedHistory);

export default ReceivedHistory
