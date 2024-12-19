import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { File } from '../entities/file.entity';
import { CategorySeeder } from './seeders/category.seeder';
import { FileSeeder } from './seeders/file.seeder';
import { databaseConfigAsync } from '../config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(databaseConfigAsync),
    TypeOrmModule.forFeature([Category, File]),
  ],
  providers: [CategorySeeder, FileSeeder],
  exports: [CategorySeeder, FileSeeder],
})
export class SeederModule {} 