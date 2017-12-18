/**
 * Created by vtdien on 12/17/2017.
 */
import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import SubMenu from './SubMenu'
import {convertTime} from '../constrants/functions'
import {postSearchBalance,getTransaction}from '../actions'

let DashBoard = (props)=>{
    console.log(props);
    if(!props.walletID)
    {
        props.history.push('/login');
        return null;
    }
    props.dispatch(postSearchBalance(props.walletID));
    props.dispatch(getTransaction(props.walletID));

    const sent_history = props.sent.slice();
    const received_history = props.received.slice();

    let sent  = sent_history.map((doc, index) =>{
        if(index > 5)
            return null;
       return(
            <tr key={index}>
                <td>{doc.receiver}</td>
                <td>{doc.value}</td>
                <td>{convertTime(doc.time)}</td>
            </tr>
       )
    });
    let received  = received_history.map((doc, index) =>{
        if(index > 5)
            return null;
        return(
            <tr key={index}>
                <td>{doc.sender}</td>
                <td>{doc.value}</td>
                <td>{convertTime(doc.time)}</td>
            </tr>
        )
    });

    return(
        <div className="row">
            <div className="col-sm-3 col-lg-3">
                <SubMenu value="option1"/>
            </div>
            <div className="col-sm-9 col-lg-9">
                <div className="Dashboard">
                    <div className="row">
                        <div className="panel panel-default balance attention-hide">
                            <div className="panel-heading attention-header">Attention</div>
                            <div className="panel-body">
                                <p>use this Wallet ID for your next login</p>
                                <input className="walletid" defaultValue={props.walletID} readOnly={true}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="panel panel-default balance">
                            <div className="panel-heading">Balance</div>
                            <div className="panel-body">
                                <p className="money-value">{props.balance}$</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 panel panel-default">
                            <Link to="/received_history">
                                <div className="panel-heading send-history">Sent History</div>
                            </Link>
                            <div className="panel-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Receiver</th>
                                        <th>Value</th>
                                        <th>Time</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {sent}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-6 panel panel-default">
                            <Link to="/received_history">
                                <div className="panel-heading receive-history">Receiver History</div>
                            </Link>
                            <div className="panel-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Sender</th>
                                        <th>Value</th>
                                        <th>Time</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {received}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = state => {
    console.log(state);
    return {
        walletID: state.accountInfo.walletID,
        balance: state.transactionInfo.balance,
        sent: state.transactionInfo.sent,
        received: state.transactionInfo.received
    }
};

DashBoard = connect(mapStateToProps)(DashBoard);

export default DashBoard