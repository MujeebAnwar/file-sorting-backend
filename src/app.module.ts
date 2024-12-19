import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { Category } from './entities/category.entity';
import { File } from './entities/file.entity';
import { SeederModule } from './database/seeder.module';
import { CommandsModule } from './commands/command.module';
import { FilesModule } from './files/files.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Category, File]),
    SeederModule,
    CommandsModule,
    FilesModule,
    CategoriesModule,
  ],
})
export class AppModule {}
