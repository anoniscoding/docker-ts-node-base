"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typeorm_routing_controllers_extensions_1 = require("typeorm-routing-controllers-extensions");
const movie_model_1 = require("./movie-model");
const typeorm_1 = require("typeorm");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
let MovieController = class MovieController {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    getAll() {
        return this.movieRepository.find();
    }
    getOne(id) {
        return this.movieRepository.findOne(id);
    }
    add(movie) {
        return this.movieRepository.save(movie);
    }
    remove(movie) {
        return this.movieRepository.remove(movie);
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get("/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getOne", null);
__decorate([
    routing_controllers_1.Post("/") //inserts if not exist, updates if exist
    ,
    __param(0, typeorm_routing_controllers_extensions_1.EntityFromBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_model_1.Movie]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "add", null);
__decorate([
    routing_controllers_1.Delete("/"),
    __param(0, typeorm_routing_controllers_extensions_1.EntityFromBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_model_1.Movie]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "remove", null);
MovieController = __decorate([
    routing_controllers_1.JsonController("/movies"),
    __param(0, typeorm_typedi_extensions_1.OrmRepository(movie_model_1.Movie)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie-controller.js.map