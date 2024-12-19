import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { File } from '../entities/file.entity';
import { SearchFilesDto } from './dto/search-files.dto';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>,
  ) {}

  async findAll(searchDto: SearchFilesDto) {
    const query = this.fileRepository.createQueryBuilder('file')
      .leftJoinAndSelect('file.category', 'category');

    if (searchDto.categoryId) {
      query.andWhere('file.category_id = :categoryId', { 
        categoryId: searchDto.categoryId 
      });
    }

    if (searchDto.flag) {
      query.andWhere('file.flag = :flag', { flag: searchDto.flag });
    }

    if (searchDto.fileType) {
      query.andWhere('file.file_type = :fileType', { fileType: searchDto.fileType });
    }

    if (searchDto.startDate) {
      query.andWhere('file.created_at >= :startDate', {
        startDate: searchDto.startDate,
      });
    }

    return await query
      .orderBy('file.created_at', 'DESC')
      .getMany();
  }

  async findOne(id: number) {
    return await this.fileRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }
} 