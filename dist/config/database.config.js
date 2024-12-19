"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfigAsync = void 0;
const config_1 = require("@nestjs/config");
exports.databaseConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => ({
        type: 'postgres',
        url: configService.get('database.url'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: configService.get('database.synchronize'),
        autoLoadEntities: configService.get('database.autoLoadEntities'),
    }),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=database.config.js.map