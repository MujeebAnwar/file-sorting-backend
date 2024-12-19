import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../../entities/category.entity';

@Injectable()
export class CategorySeeder {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async seed() {
    const categories = [
      'Pleadings (P)',
      'Inter Parties (IP)',
      'Client (C)',
      'Counsel (CL)',
      'Third Party (TP)',
      'Proofs (PF)',
      'Core Book (CB)',
    ];

    for (const categoryName of categories) {
      const existingCategory = await this.categoryRepository.findOne({
        where: { name: categoryName },
      });

      if (!existingCategory) {
        const category = new Category();
        category.name = categoryName;
        await this.categoryRepository.save(category);
      }
    }
  }
} 