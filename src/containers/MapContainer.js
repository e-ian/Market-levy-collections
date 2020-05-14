import React from 'react'
import SideBarComponent from '../components/SideBarComponent'
import {useSelector} from 'react-redux'
import  NavBarComponent from '../components/NavBarComponent'
import {Grid} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import FooterComponent from '../components/FooterComponent'
import  MapsComponent from '../components/MapsComponent'

const  MapContainer=()=> {
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
                <Grid.Column width="14">
                <MapsComponent/>
                <FooterComponent/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}
export default MapContainer
