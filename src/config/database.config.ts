import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
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