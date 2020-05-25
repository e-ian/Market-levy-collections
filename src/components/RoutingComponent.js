import React from 'react'
import {Route, Switch,} from 'react-router-dom'
<<<<<<< HEAD
import  DashboardContainer from '../containers/DashboardContainer'
import TicketsContainers from '../containers/TicketsContainers'
=======
import {Provider} from 'react-redux'
import  DashboardContainer from '../containers/DashboardContainer'
import TicketsContainers from '../containers/TicketsContainers'
import LoginComponent from '../containers/LoginContianer'
import MapContainer from '../containers/MapContainer'
import MarketContainer from '../containers/MarketContainer'
import {store} from '../store'
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753

const  RoutingComponent =()=>{
    return (
        <div>
<<<<<<< HEAD
              <Switch>
               <Route component={DashboardContainer}  path="/" exact={true} />
               <Route component={TicketsContainers} path="/collections"/>
              </Switch>
=======
        <Provider store={store}>
        <Switch>
            <Route component={DashboardContainer}  path="/" exact={true} />
            <Route component={TicketsContainers} path="/vendors"/>
            <Route component={LoginComponent} path="/login"/>
            <Route component={MapContainer} path="/maps"/>
            <Route component={MarketContainer} path="/markets"/>
        </Switch>
        </Provider>
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
        </div>
    )
}

export default RoutingComponent
