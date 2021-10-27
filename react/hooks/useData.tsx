
import { useState } from 'react'
import { reqResapApi } from '../api/reqRes'
import { PropsCategorias, PropsObjetives } from '../interfaces/reqResp'

export const useData = () => {

    const [stateObjetive, setstateObjetive] = useState<PropsObjetives[]>([])
    const [stateCategorias, setstateCategorias] = useState<PropsCategorias[]>([])

    const ReturnObjetives=()=>{

        reqResapApi
          .get<any>('/main-collection.json')
          .then((response) => {
            setstateObjetive(response.data)
          })
          .catch(console.log)

          return{
              stateObjetive
          }
    }

    const ReturnCategorias=()=>{

        reqResapApi
          .get<any>('/main-menu.json')
          .then((resp) => {
            setstateCategorias(resp.data)
          })
          .catch(console.log)
        return{
            stateCategorias
        }
    }

    

    return{
        ReturnObjetives,
        ReturnCategorias
    }
    
    
}
