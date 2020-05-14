import React from 'react'
import SideBarComponent from '../components/SideBarComponent'
import  NavBarComponent from '../components/NavBarComponent'
import TrendCompoent from '../components/TrendCompoent'
import {Grid} from 'semantic-ui-react'
const DashboardContainer =()=>{
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
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}
export default DashboardContainer