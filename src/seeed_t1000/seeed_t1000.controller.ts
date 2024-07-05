import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SeeedT1000Service } from './seeed_t1000.service';
import { CreateSeeedT1000Dto } from './dto/create-seeed_t1000.dto';
import { UpdateSeeedT1000Dto } from './dto/update-seeed_t1000.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('seeed_t1000')
@Controller('seeed_t1000')
export class SeeedT1000Controller {
  constructor(private readonly seeedT1000Service: SeeedT1000Service) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  create(@Body() createSeeedT1000Dto: CreateSeeedT1000Dto) {
    return this.seeedT1000Service.create(createSeeedT1000Dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiQuery({ name: 'dev_eui', required: false, type: String })
  @ApiQuery({ name: 'start', required: false, type: String })
  @ApiQuery({ name: 'end', required: false, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number for pagination', example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page', example: 1000 })
  findAll(
    @Query('dev_eui') dev_eui?: string,
    @Query('start') start?: string,
    @Query('end') end?: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 1000,
  ) {
    const startDate = start ? new Date(start) : undefined;
    const endDate = end ? new Date(end) : undefined;
    return this.seeedT1000Service.findAll(dev_eui, startDate, endDate, page, limit);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  findOne(@Param('id') id: string) {
    return this.seeedT1000Service.findOne(BigInt(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  update(@Param('id') id: string, @Body() updateSeeedT1000Dto: UpdateSeeedT1000Dto) {
    return this.seeedT1000Service.update(BigInt(id), updateSeeedT1000Dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: string) {
    return this.seeedT1000Service.remove(BigInt(id));
  }
}
