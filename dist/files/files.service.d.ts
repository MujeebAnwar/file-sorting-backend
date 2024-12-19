import { Repository } from 'typeorm';
import { File } from '../entities/file.entity';
import { SearchFilesDto } from './dto/search-files.dto';
export declare class FilesService {
    private fileRepository;
    constructor(fileRepository: Repository<File>);
    findAll(searchDto: SearchFilesDto): Promise<File[]>;
    findOne(id: number): Promise<File>;
}
