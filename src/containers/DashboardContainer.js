import React from 'react'
import {Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import SideBarComponent from '../components/SideBarComponent'
import  NavBarComponent from '../components/NavBarComponent'
import TrendCompoent from '../components/TrendCompoent'
import {Grid} from 'semantic-ui-react'
import FooterComponent from '../components/FooterComponent'
const DashboardContainer =({login})=>{
    const { authToken } = useSelector(state =>state.auth)
    if(!authToken) return <Redirect to="/login"/>
    return (
        <div>
        <NavBarComponent/>
        <Grid>
            <Grid.Row>
                <Grid.Column width="2">
                <SideBarComponent/>
                </Grid.Column>
                <Grid.Column width="14" >
                <TrendCompoent/>
                <FooterComponent/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}
export default DashboardContainer