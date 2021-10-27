import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { reqResapApi } from '../../api/reqRes'
import type { PropsCategorias, PropsObjetives } from '../../interfaces/reqResp'
import { CSS_HANDLES } from '../../HandlesCss/handles'
import CategoriaItem from '../desktop/CategoriaItem'
import { SubcateItem } from '../desktop/SubcateItem'
import { ObjetivosItem } from '../desktop/ObjetivosItem'


/* import { SubcateItem } from '../desktop/SubcateItem' */

type props={
  children:any;
}

export const Menu = ({children}:props) => {
 
  const [dataCategories, setCategories] = useState<PropsCategorias[]>([])
  const [dataObjetive, setObjetives] = useState<PropsObjetives[]>([])

  const [estado, setEstado] = useState<boolean>(true)
  const [estadoObajetivo, setEstadoObajetivo] = useState<boolean>(true)
  const { handles } = useCssHandles(CSS_HANDLES)
  const [scrollY,setScrollY] = useState(0);


  useEffect(() => {
      reqResapApi
      .get<any>('/main-menu.json')
      .then((response) => {
        setCategories(response.data)
      })
      .catch(console.log)
  }, [])

  useEffect(() => {
      reqResapApi
      .get<any>('/main-collection.json')
      .then((response) => {
        setObjetives(response.data)
      })
      .catch(console.log)
  }, [])

  const setScroll=()=>{
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setScroll);
    }
    watchScroll()
    return()=>{
      window.removeEventListener('scroll',setScroll)
    }
  },)

  const openCategorys = () => {
    setEstado(!estado)
    const element = document.getElementById('menuContainer')
    const elementObjetivo = document.getElementById('objetivesContent')
    const elementHamburger = document.getElementById('hamburger')
    const elementOverlay = document.getElementById('overlay_general')
    const elementHamburgerLabel = document.getElementById('hamburgerLabel')
    if(estado){
      elementOverlay?.classList.remove(`${handles['objetives_overlay']}`)
      elementOverlay?.classList.add(`${handles['categories_overlay']}`)
      element?.classList.add(`${handles['is-active']}`)
      elementHamburger?.classList.add(`${handles['is-active']}`)
      elementHamburgerLabel?.classList.add(`${handles['is-active']}`)
      if(!estadoObajetivo){
        elementObjetivo?.classList.remove(`${handles['is-active']}`)
        setEstadoObajetivo(!estadoObajetivo)  
      }
    }
    else{
      elementOverlay?.classList.remove(`${handles['categories_overlay']}`)
      element?.classList.remove(`${handles['is-active']}`)
      elementHamburger?.classList.remove(`${handles['is-active']}`)
      elementHamburgerLabel?.classList.remove(`${handles['is-active']}`)
    } 
  }
  
  const openObjetivos = () => {
    setEstadoObajetivo(!estadoObajetivo)
    const elementCategory = document.getElementById('menuContainer')
    const element = document.getElementById('objetivesContent')
    const elementHamburger = document.getElementById('hamburger')
    const elementOverlay = document.getElementById('overlay_general')
    const elementIconArrow = document.getElementById('icon-arrow-bottom')
    if(estadoObajetivo){
      elementOverlay?.classList.remove(`${handles['categories_overlay']}`)
      elementOverlay?.classList.add(`${handles['objetives_overlay']}`)
      elementOverlay?.classList.add(`${handles['objetives_overlay']}`)
      element?.classList.add(`${handles['is-active']}`)
      elementIconArrow?.classList.add(`${handles['is-active']}`)
      if(!estado){
        elementCategory?.classList.remove(`${handles['is-active']}`)
        elementHamburger?.classList.remove(`${handles['is-active']}`)
        setEstado(!estado)
      }
    }else{
      elementOverlay?.classList.remove(`${handles['objetives_overlay']}`)
      element?.classList.remove(`${handles['is-active']}`)
      elementIconArrow?.classList.remove(`${handles['is-active']}`)
    }
  }

  const openObjetivosMobile = () => {
    const element = document.getElementById('objetivesContent')
    element?.classList.add(`${handles['is-active']}`)
  }
  const closeObjetivosMobile = () => {
    const element = document.getElementById('objetivesContent')
    element?.classList.remove(`${handles['is-active']}`)
  }
  const openBrands = () => {
    const element = document.getElementById('brandsContent')
    element?.classList.add(`${handles['is-active']}`)
  }
  const closeBrands = () => {
    const element = document.getElementById('brandsContent')
    element?.classList.remove(`${handles['is-active']}`)
  }
  
    const renderNuestrasCategorias = (categoria: any,objetive:any) => {
      return (
        <>
        <header className={`${handles['labHeader']}` }>
          <div className={`${handles['labHeader-container']}` }>
            <div className={`${handles['left']}` }>
                <a 
                  href="" 
                  className={`${handles['lab-promo']}` }
                  style={(scrollY>50)?{ display: "inline" }: { display: "none" }  }
                  >
                  <div className={`${handles['image-promo']}` }></div>
                </a>
                <button 
                  id="hamburger" 
                  className={
                    `${handles['hamburger']} 
                     ${handles['hamburger--emphatic']}
                    `} 
                  type="button"
                  onClick={()=>openCategorys()}
                >
                  <span className={`${handles['hamburger-box']}`}>
                    <span className={`${handles['hamburger-inner']}`}>
                    </span>
                  </span>
                  <p className={`${handles['labelClose']}`}>Cerrar</p>
                </button>
                <p id="hamburgerLabel" className={`${handles['hamburgerLabel']}`}
                 onClick={() => openCategorys()}
                >
                  Nuestas Categorias
                </p>
                <div className={`${handles['objetivesContainer']} ${handles['has-overlay']}`}>
                  <div onClick={()=> openObjetivos()} className={`${handles['objetivesHeader']}`}>
                    <i className={`${handles['icon-medal']}`}></i>
                    <p style={{margin:"0",padding:"0",fontWeight:"normal"}}  className={`${handles['objetivesHeader-text']}`}>¿Cuál es tu objetivo?</p>
                    <i id="icon-arrow-bottom" className={`${handles['icon-arrow-bottom']}`}></i>
                  </div>
                </div>
                <div className={`${handles['searchContainer']}`}>
                  <div className={`${handles['searchHeader']}`}>
                      {children}
                      {/* <input type="text" className={`${handles['search']} ${handles['has-overlay']}`}  name="search" placeholder="¿Qué estas buscando?"/> */}
                      <i className={`${handles['icon-close']}`}></i>
                  </div>
                </div>
                <i className={`${handles['icon-search']}`}></i>
                
            </div>
            <div className={`${handles['center']}`}>
              <a href="/" style={{textDecoration:"none"}}>
                <i className={`${handles['icon-isologo']}`}></i>
              </a>
              <a href="/" style={{textDecoration:"none"}}>
                <div className={`${handles['logoContainer']}`}>
                  <i className={`${handles['icon-lab-logo']}`}></i>
                </div>
              </a>
            </div>
            <div className={`${handles['right']}`}>
                <a style={{color:"#000", textDecoration:"none"}} href="/account">
                  <i className={`${handles['icon-user']}`}></i>
                </a>
                <a style={{color:"#000", textDecoration:"none"}}href="/wishlist">
                  <i className={`${handles['icon-wish']}`} title="Lista de Deseos"></i>
                </a>
                <i className={`${handles['icon-bag']} ${handles['cart']}` }>
                  <i className={`${handles['icon-cart-alert']}`}>
                    <p className={`${handles['cartCounter']}`}>0</p>
                  </i>
                </i>
                <div className={`${handles['cartResume']}`}>
                  <h3>No hay productos en tu bolsa</h3>
                </div>
            </div>
          </div>
        </header>
          <div id="menuContainer" className={`${handles['menuContainer']}`}>
          <a href="/promociones" className={`${handles['itemFooter-link']} ${handles['js-promociones']}`}>
            <div className={`${handles['itemFooter']}`}>
              <i className={`${handles['icon-sale']}`}></i>
              <p className={`${handles['itemTitle']}`}>Promociones</p>
            </div>
          </a>
          <div className={`${handles['menuTitle']}`}>Nuestras Categorías</div>
          <div className={`${handles['objetivesContainer']}`}>
            <div onClick={()=> openObjetivosMobile()} className={`${handles['objetivesHeader']}`}>
              <i className={`${handles['icon-medal']}`}></i>
              ¿Cuál es tu objetivo?
            </div>
              <ul id="objetivesContent" className={`${handles['objetivesContent']}`}>
                <div className={`${handles['objetivesContent-Header']}`}>
                  <div className={`${handles['objetivesContent-Back']}`}>
                    <i className={`${handles['icon-left']}`}></i>
                    <p onClick={()=>closeObjetivosMobile()} className={`${handles['backText']}`}>Volver</p>
                  </div>
                  <p className={`${handles['objetivesContent-Title']}`}>Objetivos</p>
                </div>
                  {
                    objetive.map((objeItem:PropsObjetives) =>{
                      return(
                        <>
                          <ObjetivosItem
                            key={objeItem.id}
                            {...objeItem}
                          
                          />
                        </>
                      )
                    }
                    )
                  }
                
                <li className={`${handles['objetivesItem']}`}></li>
              </ul>
          </div>
            <ul className={`${handles['categoriesContainer']}`}>
              {
                categoria.map((cateItem:PropsCategorias,index:number) =>{
                  console.log('Key index: ',index)
                  return(
                    <>
                      <CategoriaItem
                        key={cateItem.id}
                        {...cateItem}
                      />
                      <SubcateItem
                        ID={cateItem.id}
                      /> 
                    </>
                  )
                }
                )
              }
              <li
                id="categoriesItem"
                className={`${handles['categoriesItem']} ${handles['brands']}`}
                onMouseEnter={()=>openBrands()}
                onMouseLeave={()=>closeBrands()}
               >
              Marcas
              </li>
              
            </ul>
            <div  className={`${handles['brandsContainer']}`}>
              <ul id="brandsContent" className={`${handles['brandsContent']}`}>
                <div className={`${handles['brandsContent-Header']}`}>
                  <div className={`${handles['brandsContent-Back']}`}>
                    <i className={`${handles['icon-left']}`}></i>
                    <p className={`${handles['backText']}`}>Volver</p>
                  </div><p className={`${handles['brandsContent-Title']}`}>Marcas</p>
                </div>
                    <li className={`${handles['brandItem']}`}>
                      <a className={`${handles['brandItem-a']}`} href="/Muscletech">
                        <img className={`${handles['ls-is-cached']} ${handles['lazyloaded']}`} 
                            data-src="https://labnutrition.vtexassets.com/arquivos/muscletech.png?v=637263665410500000" alt="" src="/arquivos/muscletech.png?v=637263665410500000"
                        />
                      </a>
                    </li>
                    <li className={`${handles['brandItem']}`}>
                      <a className={`${handles['brandItem-a']}`} href="/Muscletech">
                        <img className={`${handles['ls-is-cached']} ${handles['lazyloaded']}`} 
                            data-src="https://labnutrition.vtexassets.com/arquivos/powercrunch.png?v=637263665440500000" 
                            src="/arquivos/powercrunch.png?v=637263665440500000"
                            alt=""     
                        />
                      </a>
                    </li>
                    <li className={`${handles['brandItem']}`}>
                      <a className={`${handles['brandItem-a']}`} href="/Muscletech">
                        <img className={`${handles['ls-is-cached']} ${handles['lazyloaded']}`} 
                            data-src="https://labnutrition.vtexassets.com/arquivos/muscletech.png?v=637263665410500000" alt="" src="/arquivos/muscletech.png?v=637263665410500000"
                        />
                      </a>
                    </li>
                    <li className={`${handles['brandItem']}`}>
                      <a className={`${handles['brandItem-a']}`} href="/Muscletech">
                        <img className={`${handles['ls-is-cached']} ${handles['lazyloaded']}`} 
                            data-src="https://labnutrition.vtexassets.com/arquivos/powercrunch.png?v=637263665440500000" 
                            src="/arquivos/powercrunch.png?v=637263665440500000"
                            alt=""     
                        />
                      </a>
                    </li>
                    <li className={`${handles['brandItem']}`}>
                      <a className={`${handles['brandItem-a']}`} href="/Muscletech">
                        <img className={`${handles['ls-is-cached']} ${handles['lazyloaded']}`} 
                            data-src="https://labnutrition.vtexassets.com/arquivos/muscletech.png?v=637263665410500000" alt="" src="/arquivos/muscletech.png?v=637263665410500000"
                        />
                      </a>
                    </li>
                    <li className={`${handles['brandItem']}`}>
                      <a className={`${handles['brandItem-a']}`} href="/Muscletech">
                        <img className={`${handles['ls-is-cached']} ${handles['lazyloaded']}`} 
                            data-src="https://labnutrition.vtexassets.com/arquivos/powercrunch.png?v=637263665440500000" 
                            src="/arquivos/powercrunch.png?v=637263665440500000"
                            alt=""     
                        />
                      </a>
                    </li>
                    <li className={`${handles['brandItem']}`}>
                      <a className={`${handles['brandItem-a']}`} href="/Muscletech">
                        <img className={`${handles['ls-is-cached']} ${handles['lazyloaded']}`} 
                            data-src="https://labnutrition.vtexassets.com/arquivos/muscletech.png?v=637263665410500000" alt="" src="/arquivos/muscletech.png?v=637263665410500000"
                        />
                      </a>
                    </li>
                    <li className={`${handles['brandItem']}`}>
                      <a className={`${handles['brandItem-a']}`} href="/Muscletech">
                        <img className={`${handles['ls-is-cached']} ${handles['lazyloaded']}`} 
                            data-src="https://labnutrition.vtexassets.com/arquivos/powercrunch.png?v=637263665440500000" 
                            src="/arquivos/powercrunch.png?v=637263665440500000"
                            alt=""     
                        />
                      </a>
                    </li>
                    
                       
              </ul>
            </div>
            <div className={`${handles['menuFooter']}`}>
              <a href="http://blog.labnutrition.com/" target="_blank" className={`${handles['itemFooter-link']} ${handles['blog-lab']}`}>
                <div className={`${handles['itemFooter']}`}>
                  <i className={`${handles['icon-blog']}`}></i>
                  <p className={`${handles['itemTitle']}`}>Blog</p>
                </div>
              </a>
              <a href="/account/orders" className={`${handles['itemFooter-link']}`}>
                <div className={`${handles['itemFooter']}`}>
                  <i className={`${handles['icon-car']}`}></i>
                  <p className={`${handles['itemTitle']}`}>Mis Pedidos</p>
                </div>
              </a>
              <a href="/tiendas" className={`${handles['itemFooter-link']}`}>
                <div className={`${handles['itemFooter']}`}>
                  <i className={`${handles['icon-local']}`}></i>
                  <p className={`${handles['itemTitle']}`}>Tiendas</p>
                </div>
              </a>
            </div>

          </div>
          <div id="overlay_general" className={`${handles['overlay_general']}`}></div>
        </>
      )
    }



  return(
    <>
      <div>{renderNuestrasCategorias(dataCategories,dataObjetive)}</div>
    </>
    
    ) 
    
}






