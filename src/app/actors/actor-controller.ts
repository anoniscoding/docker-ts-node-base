import { JsonController, Param, Get, Post, Delete } from "routing-controllers";
import { Actor } from "./actor-model";
import { EntityFromBody } from "typeorm-routing-controllers-extensions";
import { ActorService } from "./actor-service";
import { Movie } from "../movies/movie-model";
 

@JsonController("/actors")
export class ActorController {

    constructor(private actorService: ActorService) {}

    @Get("/")
    public getAll(): Promise<Actor[]> {
        return this.actorService.getAll();
    }
 
    @Get("/:id")
    public getOne(@Param("id") id: number): Promise<Actor> {
        return this.actorService.getOne(id);
    }
 
    @Post("/") //inserts if not exist, updates if exist
    public add(@EntityFromBody() actor: Actor): Promise<Actor> {
        return this.actorService.add(actor);
    }
 
    @Delete("/")
    public remove(@EntityFromBody() actor: Actor): Promise<Actor> {
        return this.actorService.remove(actor);
    }
}