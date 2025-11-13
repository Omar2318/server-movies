import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Series {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    title: string; 
    @Column()
    sinopsis: string; 
    @Column()
    num_temporadas: number; 
    @Column()
    plataforma: string; 
    @Column()
    likes: number;
}
