import React from 'react'
import {Card} from 'semantic-ui-react'

const  CardComponent=(props)=>{
    return (
        <div className="card-margin">
          <Card {...props}>
            {props.children}
          </Card>  
        </div>
    )
}
export default CardComponent
