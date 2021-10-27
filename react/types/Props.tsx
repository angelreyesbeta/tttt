import { Subcategoria } from "../interfaces/reqResp";

export type PropsSubCateItems=
|{type:"seleccionarSubtitle",payload: string}
|{type:"seleccionarID",payload: string}
|{type:"seleccionarImg",payload: string}
|{type:"seleccionarUrl",payload:string}
|{type:"seleccionarTitleSubcate",payload:string}
|{type:"getSubcategory",payload:Subcategoria[]}

