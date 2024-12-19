import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfigAsync } from './config/database.config';
import configuration from './config/configuration';
import { Category } from './entities/category.entity';
import { File } from './entities/file.entity';
import { SeederModule } from './database/seeder.module';
import { CommandsModule } from './commands/command.module';
import { FilesModule } from './files/files.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync(databaseConfigAsync),
    TypeOrmModule.forFeature([Category, File]),
    SeederModule,
    CommandsModule,
    FilesModule,
    CategoriesModule,
  ],
})
export class AppModule {}
