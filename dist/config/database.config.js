"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
exports.databaseConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'file_sorting',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true,
};
//# sourceMappingURL=database.config.js.map