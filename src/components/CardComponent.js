import React from 'react'
import {Card} from 'semantic-ui-react'

export default function CardComponent(props) {
    return (
        <div className="card-margin">
          <Card {...props}>
            {props.children}
          </Card>  
        </div>
    )
}
