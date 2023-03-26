export interface MovieProps {
    id: string | number
    name: string
    year: number
}

type MoviesProps = Array<MovieProps>

export type {
    MoviesProps
}