import { FilesService } from './files.service';
import { SearchFilesDto } from './dto/search-files.dto';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    findAll(searchDto: SearchFilesDto): Promise<import("../entities/file.entity").File[]>;
    findOne(id: number): Promise<import("../entities/file.entity").File>;
}
