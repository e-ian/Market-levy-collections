import React from 'react'
import {Grid} from 'semantic-ui-react'
import NavBarComponent from '../components/NavBarComponent'
import SideBarComponent from '../components/SideBarComponent'
import TicketComponents from '../components/TicketComponents'


const  TicketsContainers=()=>{
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
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}

export default TicketsContainers