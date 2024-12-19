"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        url: process.env.DATABASE_URL,
        synchronize: true,
        autoLoadEntities: true,
    },
    cors: {
        origin: process.env.FRONTEND_URL || true,
    }
});
//# sourceMappingURL=configuration.js.map