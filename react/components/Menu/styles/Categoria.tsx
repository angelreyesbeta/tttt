import styled from 'styled-components'

export const NuestraCategoria = styled.p`
  display: block;
  max-width: 105px;
  margin: 2px 0 0 0;
  position: relative;
  cursor: pointer;
  padding-right: 10px;
`
export const ContainerCategoriaStyled = styled.div``
export const CategoriaStyled = styled.ul`
  list-style: none;
`
export const SubCategoriaStyled = styled.li`
  display: none;
`
export const CatInnerContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  background: #f9f2f4;
  transform: scaleX(0);
  opacity: 0;
  transition: 0.4s ease;
  transition-delay: opacity 0.2s;
  transform-origin: left;
  overflow: hidden;
  padding: 50px 60px 25px 30px;
  height: 375px;
  position: absolute;
  left: 50%;
  top: 100px;
  width: 500px;
  margin: -25px 0 0 0;
`
