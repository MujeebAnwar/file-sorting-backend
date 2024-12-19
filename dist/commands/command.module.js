"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_command_1 = require("nestjs-command");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../entities/category.entity");
const file_entity_1 = require("../entities/file.entity");
const seeder_module_1 = require("../database/seeder.module");
const seed_command_1 = require("./seed.command");
let CommandsModule = class CommandsModule {
};
exports.CommandsModule = CommandsModule;
exports.CommandsModule = CommandsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_command_1.CommandModule,
            seeder_module_1.SeederModule,
            typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category, file_entity_1.File]),
        ],
        providers: [seed_command_1.SeedCommand],
        exports: [seed_command_1.SeedCommand],
    })
], CommandsModule);
//# sourceMappingURL=command.module.js.map