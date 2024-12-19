import { CategorySeeder } from '../database/seeders/category.seeder';
import { FileSeeder } from '../database/seeders/file.seeder';
export declare class SeedCommand {
    private readonly categorySeeder;
    private readonly fileSeeder;
    constructor(categorySeeder: CategorySeeder, fileSeeder: FileSeeder);
    seedCategories(): Promise<void>;
    seedFiles(): Promise<void>;
    seedAll(): Promise<void>;
}
