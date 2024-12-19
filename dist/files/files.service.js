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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_entity_1 = require("../entities/file.entity");
let FilesService = class FilesService {
    constructor(fileRepository) {
        this.fileRepository = fileRepository;
    }
    async findAll(searchDto) {
        const query = this.fileRepository.createQueryBuilder('file')
            .leftJoinAndSelect('file.category', 'category');
        if (searchDto.categoryId) {
            query.andWhere('file.category_id = :categoryId', {
                categoryId: searchDto.categoryId
            });
        }
        if (searchDto.flag) {
            query.andWhere('file.flag = :flag', { flag: searchDto.flag });
        }
        if (searchDto.fileType) {
            query.andWhere('file.file_type = :fileType', { fileType: searchDto.fileType });
        }
        if (searchDto.startDate) {
            query.andWhere('file.created_at >= :startDate', {
                startDate: searchDto.startDate,
            });
        }
        return await query
            .orderBy('file.created_at', 'DESC')
            .getMany();
    }
    async findOne(id) {
        return await this.fileRepository.findOne({
            where: { id },
            relations: ['category'],
        });
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.File)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FilesService);
//# sourceMappingURL=files.service.js.map