import { IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateMovieDto {
    @IsString()
    title: string;

    @IsString()
    @MinLength(10)
    sinopsis: string;

    @IsString()
    genre: string;

    @Min(1700)
    @IsNumber()
    releaseYear: number;

    @IsString()
    poster_url: string;

    @Min(0)
    @IsNumber()
    raiting: number;
}

