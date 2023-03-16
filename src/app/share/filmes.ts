export interface Ifilme{
    results:Results[]
}

export interface Results{
    id:number,
    title:string,
    vote_average:number,
    poster_path:string
    overview:string,
    backdrop_path:string
}

