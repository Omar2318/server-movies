import { IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateSeriesDto {
    
    @IsString()
    title: string;
    
    @MinLength(12)
    @MaxLength(100)
    sinopsis: string;
    
    @IsNumber()
    @Min(1)
    num_temporadas: number;
    
    @IsString()
    plataforma: string;
    
    @IsNumber()
    likes: number;
}
