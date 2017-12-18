/**
 * Created by vtdien on 12/17/2017.
 */
import React from 'react';
import { connect } from 'react-redux'
import { postRegister} from '../actions'
import {Link} from "react-router-dom"


let RegisterForm = (props)=>{
    if(props.walletID){
        props.history.push('/dashboard');
        return null;
    }
    else{
        return(
            <div className="row form">
                <div className="col-md-4 col-md-offset-4">
                    <div className="row">
                        <div className="col-1">
                            <h1><b>Register</b></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 info-hide">
                            <span id="info-text"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Email </p>
                        </div>
                        <div className="col-sm-9">
                            <input type="text" name="" id="email" className="form-control" required="required">
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Password </p>

                        </div>
                        <div className="col-sm-9">
                            <input type="password" name="" id="password" className="form-control" required="required">
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-offset-3">
                            <button className="btn btn-register" onClick={()=>{
                                let data={
                                    email:document.getElementById('email').value,
                                    password: document.getElementById('password').value
                                };
                                props.dispatch(postRegister(data));
                            }}>Register</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <Link to="/login"><span>Already have account? Login</span></Link>
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

RegisterForm = connect(mapStateToProps)(RegisterForm);

export default RegisterForm