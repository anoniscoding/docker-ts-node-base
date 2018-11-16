import { Service } from "typedi";
import { Actor } from "./actor-model";
import { Repository } from "typeorm";
import { OrmRepository } from "typeorm-typedi-extensions";

@Service()
export class ActorService {

    constructor(@OrmRepository(Actor) private actorRepository: Repository<Actor>) {}

    public getAll(): Promise<Actor[]> {
        return this.actorRepository.find({relations: ["movies"], cache: true});
    }
 
    public getOne(id: number): Promise<Actor> {
        return this.actorRepository.findOne(id, {relations: ["movies"]});
    }
 
    //inserts if not exist, updates if exist
    public add(actor: Actor): Promise<Actor> {
        return this.actorRepository.save(actor);
    }
 
    public remove(actor: Actor): Promise<Actor> {
        return this.actorRepository.remove(actor);
    }
}