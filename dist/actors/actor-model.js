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
const movie_model_1 = require("../movies/movie-model");
let Actor = class Actor {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Actor.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Actor.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: "int" }),
    __metadata("design:type", Number)
], Actor.prototype, "views", void 0);
__decorate([
    typeorm_1.Column({ type: "tinyint" }),
    __metadata("design:type", Boolean)
], Actor.prototype, "isAlist", void 0);
__decorate([
    typeorm_1.ManyToMany(type => movie_model_1.Movie, movie => movie.actors),
    __metadata("design:type", Array)
], Actor.prototype, "movies", void 0);
Actor = __decorate([
    typeorm_1.Entity()
], Actor);
exports.Actor = Actor;
//# sourceMappingURL=actor-model.js.map