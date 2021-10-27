export interface reqRespListado {
    name:       string;
    categorias: Categoria[];
}

export interface Categoria {
    id:            string;
    title:         string;
    subtitle:      string;
    img:           string;
    href:          string;
    subcategorias: Subcategoria[];
}

export interface Subcategoria {
    id:    string;
    title: string;
    href:  string;
}


export interface PropsCategorias {
    id:            string;
    title:         string;
    subtitle:      string;
    img:           string;
    href:          string;
    subcategorias: Subcategoria[];
}

export interface Subcategoria {
    id:    string;
    title: string;
    href:  string;
}





export interface PropsObjetives{
    id:   string;
    name: string;
    href: string;
}