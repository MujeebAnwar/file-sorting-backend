import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const databaseConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    type: 'postgres',
    url: configService.get('database.url'),
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: configService.get('database.synchronize'),
    autoLoadEntities: configService.get('database.autoLoadEntities'),
  }),
  inject: [ConfigService],
};