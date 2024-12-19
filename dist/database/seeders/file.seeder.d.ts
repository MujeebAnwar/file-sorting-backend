import { Repository } from 'typeorm';
import { File } from '../../entities/file.entity';
import { Category } from '../../entities/category.entity';
export declare class FileSeeder {
    private fileRepository;
    private categoryRepository;
    constructor(fileRepository: Repository<File>, categoryRepository: Repository<Category>);
    seed(): Promise<void>;
    private getCategoryPrefix;
    private getRandomStatus;
}
