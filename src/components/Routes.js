import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Cartera from '../components/pages/Cartera/Cartera'
import Trading from '../components/pages/Trading/Trading'
import Login from '../components/pages/Login/Login'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cartera" component={Cartera} />
                <Route exact path="/trading" component={Trading} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;