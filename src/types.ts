import { ReactNode } from "react";

export type PropsWithChildren<P = unknown> = P & { children: ReactNode };

export type Movie = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    runtime?: number;
    imdbRating?: number;
    userRating?: number;
}

export type WatchedMovie = Movie & {
    runtime: number;
    imdbRating: number;
    userRating: number;
}