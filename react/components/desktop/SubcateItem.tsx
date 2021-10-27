import React, { useContext } from 'react'
import { CSS_HANDLES } from '../../HandlesCss/handles'
import { useCssHandles } from 'vtex.css-handles'
import { MenuContex } from '../../contex/MenuContex'
import { Subcategoria } from '../../interfaces/reqResp'


export const SubcateItem = ({ID}:any) => {


    console.log('Key subcateID: ',ID)
    
    const { handles } = useCssHandles(CSS_HANDLES)
    const {menuState} = useContext(MenuContex)
    const {subtitle}=menuState

    const openSubCategorys = () => {
        const element = document.getElementById(`CatInnerContainer${ID}`)
        element?.classList.add(`${handles['is-active']}`)
      }
    
    const closeSubCategorys = () => {
        const element = document.getElementById(`CatInnerContainer${ID}`)
        element?.classList.remove(`${handles['is-active']}`)
    }

    return (
        <li
            id={`CatInnerContainer${ID}`}
            className={`${handles['CatInnerContainer']}`}
            onMouseEnter={()=> openSubCategorys()}
            onMouseLeave={()=> closeSubCategorys()}
            key={ID}
            
            >
                <div className={`${handles['catHeader']}`}>
                    <a  className={`${handles['catHeader-a']}`}
                         href="/organicos-y-naturales">
                             <i className={`${handles['icon-weight']}`}></i>
                        {subtitle}
                    </a>
                </div>
                <ul className={`${handles['catContent']}`}>
                    {menuState.subcategorias.map((sub:Subcategoria)=>{
                        return(
                            <li 
                                className={`${handles['catItem']}`}
                                key={sub.id}
                            >
                                <a 
                                    href={sub.href}
                                    className={`${handles['catItem-link']}`}
                                >

                                    {sub.title}
                                </a>
                            </li>
                        )
                    })}

                    
                </ul>
                <figure className={`${handles['catImgContainer']}`}>
                    <img className={`${handles['catImg']}`}  src={menuState.img}></img>
                    <a href={menuState.href}>
                        <div className={`${handles['catImgCta']}`}>
                            Ver Más
                        </div>
                    </a>
                </figure>
        </li>
    )
}
