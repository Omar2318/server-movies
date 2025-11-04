import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    sinopsis: string;

    @Column()
    genre: string;

    @Column()
    releaseYear: number;

    @Column()
    poster_url: string;

    @Column('numeric',{default: 0})
    rating: number;

}
