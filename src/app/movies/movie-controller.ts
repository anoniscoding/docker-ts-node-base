import { JsonController, Param, Get, Post, Delete } from "routing-controllers";
import { EntityFromBody } from "typeorm-routing-controllers-extensions";
import { Movie } from "./movie-model";
import { MovieService } from "./movie-service";
 
@JsonController("/movies")
export class MovieController {

    constructor(private movieService: MovieService) {}
   
    @Get("/")
    getAll() {
        return this.movieService.getAll();
    }
 
    @Get("/:id")
    getOne(@Param("id") id: number) {
        return this.movieService.getOne(id);
    }
 
    @Post("/") //inserts if not exist, updates if exist
    add(@EntityFromBody() movie: Movie) {
        return this.movieService.add(movie);
    }
 
    @Delete("/")
    remove(@EntityFromBody() movie: Movie) {
        return this.movieService.remove(movie);
    }
}