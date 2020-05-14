import React, {useState} from 'react'
import {Menu, Image} from 'semantic-ui-react'
import avatar from '../images/image.png'

export default function NavBarComponent() {
    const [activeItem , setActiveItem ] =  useState('')
    const handleItemClick = (e,{name})=>{
        setActiveItem(name)
    }
    return (
        <div>
        <div>
        <Menu pointing secondary>
          <Menu.Menu position='right'>
            <Image src={avatar} className="profileImage" />
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
            <Menu.Item/>
          </Menu.Menu>
        </Menu>
      </div>
        </div>
    )
}
