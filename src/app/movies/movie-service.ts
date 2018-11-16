import { Service } from "typedi";
import { Movie } from "./movie-model";
import { Repository } from "typeorm";
import { OrmRepository } from "typeorm-typedi-extensions";

@Service()
export class MovieService {

    constructor(@OrmRepository(Movie) private movieRepository: Repository<Movie>) {}

    public getAll(): Promise<Movie[]> {
        return this.movieRepository.find({relations: ["actors"]});
    }
 
    public getOne(id: number): Promise<Movie> {
        return this.movieRepository.findOne(id, {relations: ["actors"]});
    }
 
    //inserts if not exist, updates if exist
    public add(movie: Movie): Promise<Movie> {
        return this.movieRepository.save(movie);
    }
 
    public remove(movie: Movie): Promise<Movie> {
        return this.movieRepository.remove(movie);
    }
}