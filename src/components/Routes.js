import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Cartera from '../components/pages/Cartera/Cartera'
import Trading from '../components/pages/Trading/Trading'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cartera" component={Cartera} />
                <Route exact path="/trading" component={Trading} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;