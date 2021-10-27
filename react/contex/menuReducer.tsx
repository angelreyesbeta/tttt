



import { PropsCategorias } from '../interfaces/reqResp'
import { PropsSubCateItems } from '../types/Props'


export const menuReducer = (state:PropsCategorias,action:PropsSubCateItems):PropsCategorias => {

    

    switch(action.type){
        case 'seleccionarSubtitle':
            return{
                ...state,
                subtitle:action.payload  
            }
        case 'seleccionarID':
            return{
                ...state,
                
                id:action.payload  
            }
        case 'seleccionarImg':
            return{
                ...state,
                img:action.payload
            }
        case 'seleccionarUrl':
            return{
                ...state,
                href:action.payload
            }
        case 'getSubcategory':
            return{
                ...state,
                subcategorias:action.payload
            }
        default:
            return state
    }
}


