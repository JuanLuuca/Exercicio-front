import { ReactNode } from "react"

export interface PropsCard {
    data: TypeDisney[]
    searchTerm: string
    pageNumber: number
    handlePageChange: (selected: PropsPagination) => void
    onclick: () => void
}

export interface PropsCardModal {
    data: TypeDisney[]
    searchTerm: string
    pageNumber: number
    handlePageChange: (selected: PropsPagination) => void
}

export interface PropsPagination {
    selected: number
}

export interface TypeDisney {
    _id: number
    name: string
    imageUrl: string
    url: string
    films: string
    tvShows: string
    videoGames: string
    allies: string
    enemies: string
}

// TYPES PARA MEU ESTADO GLOBAL /CONTEXTAPI

export const initialvalue = {
    valueId: 0,
    setValueId: () => {}
}

export interface TypeContextProps {
    valueId: number,
    setValueId: (NewState: number) => void 
}

export interface TypeContextChildren {
    children: ReactNode
}