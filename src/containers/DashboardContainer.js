import React from 'react'
import SideBarComponent from '../components/SideBarComponent'
import  NavBarComponent from '../components/NavBarComponent'
import {Grid} from 'semantic-ui-react'

export default function DashboardContainer() {
    return (
        <div>
        <NavBarComponent/>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                <SideBarComponent/>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}
