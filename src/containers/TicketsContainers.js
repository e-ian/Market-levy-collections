import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import NavBarComponent from '../components/NavBarComponent'
import SideBarComponent from '../components/SideBarComponent'
import TicketComponents from '../components/TicketComponents'
import FooterComponent from '../components/FooterComponent'


const  TicketsContainers=()=>{
    const { authToken} = useSelector(state=>state.auth)
    console.log(authToken)
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
                <TicketComponents/>
                <FooterComponent/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}
export default TicketsContainers
