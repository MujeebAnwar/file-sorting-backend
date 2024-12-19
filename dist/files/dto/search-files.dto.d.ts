import { FileStatus } from '../../entities/file.entity';
export declare class SearchFilesDto {
    categoryId?: number;
    flag?: FileStatus;
    fileType?: string;
    startDate?: string;
    endDate?: string;
}
