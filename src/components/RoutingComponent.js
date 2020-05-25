import React from 'react'
import {Route, Switch,} from 'react-router-dom'
import {Provider} from 'react-redux'
import  DashboardContainer from '../containers/DashboardContainer'
import TicketsContainers from '../containers/TicketsContainers'
import LoginComponent from '../containers/LoginContianer'
import MapContainer from '../containers/MapContainer'
import MarketContainer from '../containers/MarketContainer'
import {store} from '../store'

const  RoutingComponent =()=>{
    return (
        <div>
        <Provider store={store}>
        <Switch>
            <Route component={DashboardContainer}  path="/" exact={true} />
            <Route component={TicketsContainers} path="/vendors"/>
            <Route component={LoginComponent} path="/login"/>
            <Route component={MapContainer} path="/maps"/>
            <Route component={MarketContainer} path="/markets"/>
        </Switch>
        </Provider>
        </div>
    )
}

export default RoutingComponent
