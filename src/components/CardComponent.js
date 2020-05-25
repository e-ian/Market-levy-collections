import React from 'react'
import {Card} from 'semantic-ui-react'

<<<<<<< HEAD
export default function CardComponent(props) {
=======
const  CardComponent=(props)=>{
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
    return (
        <div className="card-margin">
          <Card {...props}>
            {props.children}
          </Card>  
        </div>
    )
}
<<<<<<< HEAD
=======
export default CardComponent
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
