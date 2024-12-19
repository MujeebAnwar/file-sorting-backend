import { Controller, Get, Query, Param, NotFoundException } from '@nestjs/common';
import { FilesService } from './files.service';
import { SearchFilesDto } from './dto/search-files.dto';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  async findAll(@Query() searchDto: SearchFilesDto) {
    return await this.filesService.findAll(searchDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const file = await this.filesService.findOne(id);
    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }
    return file;
  }
} 