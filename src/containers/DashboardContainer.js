import React from 'react'
import {Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import SideBarComponent from '../components/SideBarComponent'
import  NavBarComponent from '../components/NavBarComponent'
import TrendCompoent from '../components/TrendCompoent'
import {Grid} from 'semantic-ui-react'
<<<<<<< HEAD
const DashboardContainer =()=>{
=======
import FooterComponent from '../components/FooterComponent'
const DashboardContainer =({login})=>{
    const { authToken } = useSelector(state =>state.auth)
    if(!authToken) return <Redirect to="/login"/>
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
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
<<<<<<< HEAD
=======
                <FooterComponent/>
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}
export default DashboardContainer