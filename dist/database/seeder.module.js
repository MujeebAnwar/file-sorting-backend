"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../entities/category.entity");
const file_entity_1 = require("../entities/file.entity");
const category_seeder_1 = require("./seeders/category.seeder");
const file_seeder_1 = require("./seeders/file.seeder");
const database_config_1 = require("../config/database.config");
let SeederModule = class SeederModule {
};
exports.SeederModule = SeederModule;
exports.SeederModule = SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
            typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category, file_entity_1.File]),
        ],
        providers: [category_seeder_1.CategorySeeder, file_seeder_1.FileSeeder],
        exports: [category_seeder_1.CategorySeeder, file_seeder_1.FileSeeder],
    })
], SeederModule);
//# sourceMappingURL=seeder.module.js.map