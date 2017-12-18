/**
 * Created by vtdien on 12/17/2017.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RegisterForm from '../containers/RegisterForm'
import LoginForm from '../containers/LoginForm'
import DashBoard from '../containers/DashBoard'
import TransactForm from '../containers/TransactForm'
import SentHistory from '../containers/SentHistory'
import ReceivedHistory from '../containers/ReceivedHistory'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory({ basename: '/' });


const App = ()=>(
    <div className="container">
        <Switch>
            <Route exact path="/register" component={RegisterForm} history={history}/>
            <Route exact path="/login" component={LoginForm} history={history}/>
            <Route exact path="/dashboard" component={DashBoard} history={history}/>
            <Route exact path="/transact" component={TransactForm} history={history}/>
            <Route exact path="/sent_history" component={SentHistory} history={history}/>
            <Route exact path="/received_history" component={ReceivedHistory} history={history}/>
        </Switch>
    </div>
);

export default App;