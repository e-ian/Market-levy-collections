import React,{useState} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from "react-router-dom"

export default function SideBarComponent() {
    const [ activeItem, setActiveItem] = useState('')

    const handleItemClick =(e,{name})=>{
        e.preventDefault()
        setActiveItem(name)
    }
    return (
        <div>
            <Menu vertical>
            <Menu.Item>
              <Menu.Header>
              <Link to="/">
              Dashboard
              </Link>
              </Menu.Header>
              <Menu.Menu >
                <Menu.Item
<<<<<<< HEAD
                active={activeItem === "Collections"}
                name="Collections"
                onClick={handleItemClick}
                ><Link to="/collections"> Collections</Link>
=======
                active={activeItem === "Venders"}
                name="Venders"
                onClick={handleItemClick}
                ><Link to="/vendors">Vendors</Link>
                </Menu.Item>
                <Menu.Item
                active={activeItem === "Markers"}
                name="Markets"
                onClick={handleItemClick}
                ><Link to="/markets">Markets</Link>
>>>>>>> 8cbef0c8499b5e60ead15b47821f5effc42e5753
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
            </Menu>
        </div>
    )
}
