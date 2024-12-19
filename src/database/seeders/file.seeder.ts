import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File, FileStatus } from '../../entities/file.entity';
import { Category } from '../../entities/category.entity';

@Injectable()
export class FileSeeder {
  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async seed() {
    const categories = await this.categoryRepository.find();
    const fileTypes = ['pdf', 'png', 'jpg', 'docx'];
    
    for (const category of categories) {
      const prefix = this.getCategoryPrefix(category.name);
      
      for (let i = 1; i <= 5; i++) {
        const fileType = fileTypes[Math.floor(Math.random() * fileTypes.length)];
        const fileName = `${prefix}${i}.${fileType}`;

        const existingFile = await this.fileRepository.findOne({
          where: {
            file_name: fileName,
            category_id: category.id,
          },
        });

        if (!existingFile) {
          const file = new File();
          file.file_name = fileName;
          file.file_path = `/uploads/${category.name}/${fileName}`;
          file.file_type = fileType;
          file.document_index = `${prefix}${i}`;
          file.category_id = category.id;
          file.flag = this.getRandomStatus();
          
          await this.fileRepository.save(file);
        }
      }
    }
  }

  private getCategoryPrefix(categoryName: string): string {
    const prefixMap: { [key: string]: string } = {
      'Pleadings (P)': 'P',
      'Inter Parties (IP)': 'IP',
      'Client (C)': 'C',
      'Counsel (CL)': 'CL',
      'Third Party (TP)': 'TP',
      'Proofs (PF)': 'PF',
      'Core Book (CB)': 'CB',
    };

    return prefixMap[categoryName] || '';
  }

  private getRandomStatus(): FileStatus {
    const statuses = [FileStatus.DONE, FileStatus.IN_PROGRESS, FileStatus.FAILED];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }
} 