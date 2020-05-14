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
                active={activeItem === "Collections"}
                name="Collections"
                onClick={handleItemClick}
                ><Link to="/collections"> Collections</Link>
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
            </Menu>
        </div>
    )
}
