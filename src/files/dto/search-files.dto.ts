import { IsOptional, IsEnum, IsDateString } from 'class-validator';
import { FileStatus } from '../../entities/file.entity';

export class SearchFilesDto {
  @IsOptional()
  categoryId?: number;

  @IsOptional()
  @IsEnum(FileStatus)
  flag?: FileStatus;

  @IsOptional()
  fileType?: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
} 