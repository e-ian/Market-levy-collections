import React from 'react'
import {Grid} from 'semantic-ui-react'
<<<<<<< HEAD
import NavBarComponent from '../components/NavBarComponent'
import SideBarComponent from '../components/SideBarComponent'
import TicketComponents from '../components/TicketComponents'


const  TicketsContainers=()=>{
=======
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
                <TicketComponents/>
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
<<<<<<< HEAD

=======
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
export default TicketsContainers