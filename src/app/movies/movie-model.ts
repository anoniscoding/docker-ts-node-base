import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Actor } from "../actors/actor-model"

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: "varchar", length: 150})
    public name: string;

    @Column({type: "varchar", length: 150})
    public description: string;

    @Column({type: "int"})
    public views: number;

    @Column({type: "tinyint"})
    public isBreakBoxOffice: boolean;

    @ManyToMany(type => Actor, actor => actor.movies)
    @JoinTable({name: "movie_actor"})
    public actors: Actor[];
}