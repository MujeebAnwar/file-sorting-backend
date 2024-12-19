import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { File } from '../entities/file.entity';
import { SeederModule } from '../database/seeder.module';
import { SeedCommand } from './seed.command';

@Module({
  imports: [
    CommandModule,
    SeederModule,
    TypeOrmModule.forFeature([Category, File]),
  ],
  providers: [SeedCommand],
  exports: [SeedCommand],
})
export class CommandsModule {} 