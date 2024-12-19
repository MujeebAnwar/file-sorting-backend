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
exports.SeedCommand = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const category_seeder_1 = require("../database/seeders/category.seeder");
const file_seeder_1 = require("../database/seeders/file.seeder");
let SeedCommand = class SeedCommand {
    constructor(categorySeeder, fileSeeder) {
        this.categorySeeder = categorySeeder;
        this.fileSeeder = fileSeeder;
    }
    async seedCategories() {
        await this.categorySeeder.seed();
        console.log('Categories seeded successfully!');
    }
    async seedFiles() {
        await this.fileSeeder.seed();
        console.log('Files seeded successfully!');
    }
    async seedAll() {
        await this.categorySeeder.seed();
        await this.fileSeeder.seed();
        console.log('All tables seeded successfully!');
    }
};
exports.SeedCommand = SeedCommand;
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'seed:categories',
        describe: 'Seed categories table',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeedCommand.prototype, "seedCategories", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'seed:files',
        describe: 'Seed files table',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeedCommand.prototype, "seedFiles", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'seed:all',
        describe: 'Seed all tables',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeedCommand.prototype, "seedAll", null);
exports.SeedCommand = SeedCommand = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_seeder_1.CategorySeeder,
        file_seeder_1.FileSeeder])
], SeedCommand);
//# sourceMappingURL=seed.command.js.map