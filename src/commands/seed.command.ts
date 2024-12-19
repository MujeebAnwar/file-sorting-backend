import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { CategorySeeder } from '../database/seeders/category.seeder';
import { FileSeeder } from '../database/seeders/file.seeder';

@Injectable()
export class SeedCommand {
  constructor(
    private readonly categorySeeder: CategorySeeder,
    private readonly fileSeeder: FileSeeder,
  ) {}

  @Command({
    command: 'seed:categories',
    describe: 'Seed categories table',
  })
  async seedCategories() {
    await this.categorySeeder.seed();
    console.log('Categories seeded successfully!');
  }

  @Command({
    command: 'seed:files',
    describe: 'Seed files table',
  })
  async seedFiles() {
    await this.fileSeeder.seed();
    console.log('Files seeded successfully!');
  }

  @Command({
    command: 'seed:all',
    describe: 'Seed all tables',
  })
  async seedAll() {
    await this.categorySeeder.seed();
    await this.fileSeeder.seed();
    console.log('All tables seeded successfully!');
  }
} 