import React from 'react'
import {Route, Switch,} from 'react-router-dom'
import  DashboardContainer from '../containers/DashboardContainer'
import TicketsContainers from '../containers/TicketsContainers'

const  RoutingComponent =()=>{
    return (
        <div>
              <Switch>
               <Route component={DashboardContainer}  path="/" exact={true} />
               <Route component={TicketsContainers} path="/collections"/>
              </Switch>
        </div>
    )
}

export default RoutingComponent
