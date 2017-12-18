/**
 * Created by vtdien on 12/18/2017.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutTodo} from "../actions/index"

let SubMenu = ({dispatch})=>(
    <div className="left-menu">
        <div className="panel panel-default">
            <div className="panel-heading">Menu</div>
            <div className="panel-body">
                <ul className="list none">
                    <li>
                        <Link to="/dashboard">
                            <button id="option1"
                                    className="btn btn-success-outline option"> Dashboard </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/transact">
                            <button id="option2"
                                    className="btn btn-success-outline option">  Transact </button>
                        </Link>

                    </li>
                    <li>
                        <Link to="/sent_history">
                            <button id="option3"
                                    className="btn btn-success-outline option">Sent History </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/received_history">
                            <button id="option4"
                                    className="btn btn-success-outline option">Received History </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/received_history">
                            <button onClick={()=> dispatch(logoutTodo())}
                                    className="btn btn-success-outline option">Log out</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
SubMenu = connect()(SubMenu);
export default SubMenu