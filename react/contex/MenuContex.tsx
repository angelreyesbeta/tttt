import React, { createContext,useReducer } from "react"

import { PropsCategorias, Subcategoria } from "../interfaces/reqResp"
import { menuReducer } from "./menuReducer"


// Estado inicial
export const menuInitialState: PropsCategorias = {
    id:"",
    title:"",
    subtitle:"",
    img:"",
    href:"",
    subcategorias:[]
}

export interface MenuContextProps {
    menuState: PropsCategorias;
    changeItemsSubTitle: (subtitle:string) => void
    changeItemsID: (id:string) => void
    changeItemsImg: (img:string) => void
    changeItemsUrl: (url:string) => void
    getSubCategory:  (subcategory:Subcategoria[]) => void
}



export const MenuContex=createContext({} as MenuContextProps)

export const MenuProvider = ({children}:any) => {



    const [menuState, dispatch] = useReducer(menuReducer, menuInitialState)
    
    const changeItemsSubTitle=(subtitle:string)=>{
        dispatch({type:'seleccionarSubtitle', payload:subtitle})
    }
    const changeItemsID=(id:string)=>{
        dispatch({type:'seleccionarID', payload:id})
    }
    const changeItemsImg=(img:string)=>{
        dispatch({type:'seleccionarImg', payload:img})
    }
    const changeItemsUrl=(url:string)=>{
        dispatch({type:'seleccionarUrl', payload:url})
    }
  
    const getSubCategory=(subcategory:Subcategoria[])=>{
        dispatch({type:'getSubcategory', payload:subcategory})
    }

   

  
    return(
        <MenuContex.Provider value={{
                
                menuState,
                changeItemsSubTitle,
                changeItemsID,
                changeItemsUrl,
                changeItemsImg,
                getSubCategory
            }}>
            {children}
        </MenuContex.Provider>
    )


}
