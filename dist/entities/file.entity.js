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
exports.File = exports.FileStatus = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
var FileStatus;
(function (FileStatus) {
    FileStatus["DONE"] = "done";
    FileStatus["IN_PROGRESS"] = "in_progress";
    FileStatus["FAILED"] = "failed";
})(FileStatus || (exports.FileStatus = FileStatus = {}));
let File = class File {
};
exports.File = File;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], File.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], File.prototype, "file_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], File.prototype, "file_path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], File.prototype, "file_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], File.prototype, "document_index", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: FileStatus,
        default: FileStatus.IN_PROGRESS,
    }),
    __metadata("design:type", String)
], File.prototype, "flag", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], File.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, category => category.files),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", category_entity_1.Category)
], File.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], File.prototype, "created_at", void 0);
exports.File = File = __decorate([
    (0, typeorm_1.Entity)('files')
], File);
//# sourceMappingURL=file.entity.js.map