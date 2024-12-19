export default () => ({
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