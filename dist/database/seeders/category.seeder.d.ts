import { Repository } from 'typeorm';
import { Category } from '../../entities/category.entity';
export declare class CategorySeeder {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    seed(): Promise<void>;
}
