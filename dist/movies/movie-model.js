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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const actor_model_1 = require("../actors/actor-model");
let Movie = class Movie {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 150 }),
    __metadata("design:type", String)
], Movie.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 150 }),
    __metadata("design:type", String)
], Movie.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: "int" }),
    __metadata("design:type", Number)
], Movie.prototype, "views", void 0);
__decorate([
    typeorm_1.Column({ type: "tinyint" }),
    __metadata("design:type", Boolean)
], Movie.prototype, "isBreakBoxOffice", void 0);
__decorate([
    typeorm_1.ManyToMany(type => actor_model_1.Actor, actor => actor.movies),
    typeorm_1.JoinTable({ name: "movie_actor" }),
    __metadata("design:type", Array)
], Movie.prototype, "actors", void 0);
Movie = __decorate([
    typeorm_1.Entity()
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movie-model.js.map