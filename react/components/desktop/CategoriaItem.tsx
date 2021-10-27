import React, { useContext } from 'react'

import { CSS_HANDLES } from '../../HandlesCss/handles'
import { useCssHandles } from 'vtex.css-handles'
//import { PropsCategorias } from '../../interfaces/reqResp'
import { MenuContex } from '../../contex/MenuContex'

 const CategoriaItem = (categoriasitem:any) => {

    
/*     console.log('Mostrar key :',JSON.stringify(categoriasitem)) */

    /* const [state, setstate] = useState(0) */
   
    const { handles } = useCssHandles(CSS_HANDLES)
    const {changeItemsSubTitle,changeItemsID,changeItemsImg,changeItemsUrl,getSubCategory} = useContext(MenuContex)
    
    const openSubCategorys = () => {
        const element = document.getElementById('CatInnerContainer')
        /* element?.classList.add(`${handles['isActive']}`) */
        element?.classList.add(`${handles['is-active']}`)
        changeItemsSubTitle(categoriasitem.subtitle)
        changeItemsID(categoriasitem.id)
        getSubCategory(categoriasitem.subcategorias)
        changeItemsUrl(categoriasitem.href),
        changeItemsImg(categoriasitem.img)

      }
      const openSubCategorysMobile = (e:any) => {
        console.log('ee: ',e)

       /* const CatInnerContainer2 = document.getElementById(`CatInnerContainer${state}`) */

       const activeElement = () => {
           const CatInnerContainer = document.getElementById(`CatInnerContainer${e}`)
           CatInnerContainer?.classList.add(`${handles['is-active-mobile']}`)
       }
       const setElementState =document.querySelector(`.${handles['is-active-mobile']}`)
       if(setElementState){
           setElementState?.classList.remove(`${handles['is-active-mobile']}`)
           const categoryItemAttributeId = setElementState?.previousElementSibling?.getAttribute('data-id')
           console.log('dataid', setElementState?.previousElementSibling?.getAttribute('data-id'))
            console.log('validation', setElementState?.previousElementSibling?.getAttribute('data-id') != e)
           if( categoryItemAttributeId  != e) {
               activeElement()
           }
       } else {
           activeElement()
       }
     }
    
    const closeSubCategorys = () => {
        const element = document.getElementById('CatInnerContainer')
        /* element?.classList.remove(`${handles['isActive']}`) */
        element?.classList.remove(`${handles['is-active']}`)
    }
    return (
        <li
            data-id={`${categoriasitem.id}`}
            id={`categoriesItem${categoriasitem.id}`}
            className={`${handles['categoriesItem']}`}
            onMouseEnter={()=> openSubCategorys()}
            onClick={()=>openSubCategorysMobile(categoriasitem.id)}
            onMouseLeave={()=> closeSubCategorys()}
            
        >
            {categoriasitem.title}    
        </li>
    )
}


export default CategoriaItem