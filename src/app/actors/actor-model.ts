import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import {Movie} from "../movies/movie-model";

@Entity()
export class Actor {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 100})
    public name: string;

    @Column()
    public views: number;

    @Column({type: "tinyint"})
    public isAlist: boolean;

    @ManyToMany(type => Movie, movie => movie.actors)
    public movies: Movie[];
}