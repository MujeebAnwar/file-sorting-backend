declare const _default: () => {
    port: number;
    database: {
        url: string;
        synchronize: boolean;
        autoLoadEntities: boolean;
    };
    cors: {
        origin: string | boolean;
    };
};
export default _default;
