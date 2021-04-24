interface MovieDBResp {
    page: number;
    results: Pelicula[];
    totalPages: number;
    totalResults: number;
}

interface Pelicula {
    adult: boolean;
    backdropPath: string;
    genreIds: number[];
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}
