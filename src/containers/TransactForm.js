/**
 * Created by vtdien on 12/18/2017.
 */
import React from 'react'
import SubMenu from './SubMenu'
import {connect} from 'react-redux'
import {postTransact}from '../actions'


let TransactionForm = (props)=>{
    if(!props.walletID){
        props.history.push('/login');
        return null;
    }
    return(
        <div className="row">
            <div className="col-sm-3 col-lg-3">
                <SubMenu value="option2"/>
            </div>
            <div className="col-sm-9 col-lg-9">
                <div className="row">
                    <div className="panel panel-default balance">
                        <div className="panel-heading">Chuyển tiền</div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-7 offset-md-2 info-hide">
                                    <span id="info-text"></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <p>Người nhận </p>
                                </div>
                                <div className="col-5">
                                    <input type="text" name="" id="receiver" className="form-control" required="required">
                                    </input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <p>Số tiền </p>
                                </div>
                                <div className="col-5">
                                    <input type="number" name="" id="value" className="form-control" required="required">
                                    </input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 offset-md-3">
                                    <button className="btn btn-login" onClick={()=>{
                                        let data={
                                            sender: props.walletID,
                                            receiver: document.getElementById("receiver").value,
                                            value: parseInt(document.getElementById("value").value,0)
                                        };
                                        props.dispatch(postTransact(data));

                                    }}>Gửi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = state => {

    return {
        walletID: state.accountInfo.walletID
    }
};

TransactionForm = connect(mapStateToProps)(TransactionForm);

export default TransactionForm