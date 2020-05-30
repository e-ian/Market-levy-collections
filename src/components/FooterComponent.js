import React from 'react'
import {Grid, Header} from 'semantic-ui-react'

const  FooterComponent =()=>{
    return (
        <div>
           <Grid>
            <Grid.Row>
            <Grid.Column>
             <div className="footer">
                <div>
                    <Header size="tiny"> &copy;Trudigital, 2020</Header>
                </div>
             </div>
            </Grid.Column>
            </Grid.Row>
           </Grid> 
        </div>
    )
}

export default FooterComponent
