import React from 'react'
import { PropsObjetives } from '../../interfaces/reqResp'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../../HandlesCss/handles'
export const ObjetivosItem = (objetivesItem:PropsObjetives) => {
    const { handles } = useCssHandles(CSS_HANDLES)
  
    
    return (
        <>
        <li key={objetivesItem.id} className={`${handles['objetivesItem']}`}>
            <a href={objetivesItem.href} className={`${handles['objetivesItem-Link']}`}>
            <i  className={`${handles['icon-body']}`}></i>
                {objetivesItem.name}
            </a>
        </li>
         
    </>
    )
}
