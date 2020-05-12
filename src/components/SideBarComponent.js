import React,{useState} from 'react'
import { Menu } from 'semantic-ui-react'

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
              <Menu.Header>Dashboard</Menu.Header>
              <Menu.Menu>
                <Menu.Item
                active={activeItem === "venders"}
                name="venders"
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === "tickets"}
                name="tickets"
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === "Geo-visialize"}
                name="Geo-visialize"
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
               <Menu.Item
                active={activeItem === ""}
                name=""
                onClick={handleItemClick}
               />
              </Menu.Menu>
            </Menu.Item>
            </Menu>
        </div>
    )
}
