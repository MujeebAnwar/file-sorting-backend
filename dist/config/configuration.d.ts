declare const _default: () => {
    port: number;
    database: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        synchronize: boolean;
        autoLoadEntities: boolean;
    };
    cors: {
        origin: string | boolean;
    };
};
export default _default;
