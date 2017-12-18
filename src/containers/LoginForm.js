/**
 * Created by vtdien on 12/17/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import { postLogin} from '../actions'
import {Link }from 'react-router-dom'

const Login=(props)=> {
    console.log(props);
    if (props.walletID) {
        props.history.push('/dashboard');
        return null;
    }
    else {
        return (
            <div className="row form">
                <div className="col-md-4 col-lg-offset-4">
                    <div className="row">
                        <div className="col-1">
                            <h1><b>Login</b></h1>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 info-hide">
                            <span id="info-text"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Wallet ID </p>

                        </div>
                        <div className="col-sm-9">
                            <input type="text" name="" id="userId" className="form-control" required="required">
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Password </p>

                        </div>
                        <div className="col-sm-9">
                            <input type="password" name="" id="password" className="form-control"
                                   required="required">
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 col-sm-offset-3">
                            <button className="btn btn-login" onClick={()=>{
                                let data={
                                    userId:document.getElementById('userId').value,
                                    password: document.getElementById('password').value
                                };
                                props.dispatch(postLogin(data));
                            }}>Login</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <Link to="/register"><span>Don't have account? Create one</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


const mapStateToProps = state => {

    return {
        walletID: state.accountInfo.walletID
    }
};

const LoginForm = connect(
    mapStateToProps,
)(Login);

export default LoginForm