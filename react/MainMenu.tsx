import React from 'react'
import {Menu} from './components/Menu/Menu'
import { MenuProvider } from './contex/MenuContex'

type props={
  children:any
}

 const MainMenu = ({children}:props) => {
    return (
      <MenuState>
          <Menu
            children={children}
          />
      </MenuState>
        
    )
}


const MenuState = ({children}:any)=>{
    return(
      <MenuProvider>
        {children}
      </MenuProvider>
    )
  }

export default MainMenu