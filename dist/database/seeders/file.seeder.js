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
exports.FileSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_entity_1 = require("../../entities/file.entity");
const category_entity_1 = require("../../entities/category.entity");
let FileSeeder = class FileSeeder {
    constructor(fileRepository, categoryRepository) {
        this.fileRepository = fileRepository;
        this.categoryRepository = categoryRepository;
    }
    async seed() {
        const categories = await this.categoryRepository.find();
        const fileTypes = ['pdf', 'png', 'jpg', 'docx'];
        for (const category of categories) {
            const prefix = this.getCategoryPrefix(category.name);
            for (let i = 1; i <= 5; i++) {
                const fileType = fileTypes[Math.floor(Math.random() * fileTypes.length)];
                const fileName = `${prefix}${i}.${fileType}`;
                const existingFile = await this.fileRepository.findOne({
                    where: {
                        file_name: fileName,
                        category_id: category.id,
                    },
                });
                if (!existingFile) {
                    const file = new file_entity_1.File();
                    file.file_name = fileName;
                    file.file_path = `/uploads/${category.name}/${fileName}`;
                    file.file_type = fileType;
                    file.document_index = `${prefix}${i}`;
                    file.category_id = category.id;
                    file.flag = this.getRandomStatus();
                    await this.fileRepository.save(file);
                }
            }
        }
    }
    getCategoryPrefix(categoryName) {
        const prefixMap = {
            'Pleadings (P)': 'P',
            'Inter Parties (IP)': 'IP',
            'Client (C)': 'C',
            'Counsel (CL)': 'CL',
            'Third Party (TP)': 'TP',
            'Proofs (PF)': 'PF',
            'Core Book (CB)': 'CB',
        };
        return prefixMap[categoryName] || '';
    }
    getRandomStatus() {
        const statuses = [file_entity_1.FileStatus.DONE, file_entity_1.FileStatus.IN_PROGRESS, file_entity_1.FileStatus.FAILED];
        return statuses[Math.floor(Math.random() * statuses.length)];
    }
};
exports.FileSeeder = FileSeeder;
exports.FileSeeder = FileSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.File)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FileSeeder);
//# sourceMappingURL=file.seeder.js.map