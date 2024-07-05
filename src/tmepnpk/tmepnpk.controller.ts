import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { TmepnpkService } from './tmepnpk.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateTmepnpkDto } from './dto/create-tmepnpk.dto';
import { UpdateTmepnpkDto } from './dto/update-tmepnpk.dto';

@ApiTags('tmepnpk')
@Controller('tmepnpk')
export class TmepnpkController {
  constructor(private readonly tmepnpkService: TmepnpkService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  create(@Body() createTmepnpkDto: CreateTmepnpkDto) {
    return this.tmepnpkService.create(createTmepnpkDto);
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
    return this.tmepnpkService.findAll(dev_eui, startDate, endDate, page, limit);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  findOne(@Param('id') id: string) {
    return this.tmepnpkService.findOne(BigInt(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  update(@Param('id') id: string, @Body() updateTmepnpkDto: UpdateTmepnpkDto) {
    return this.tmepnpkService.update(BigInt(id), updateTmepnpkDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: string) {
    return this.tmepnpkService.remove(BigInt(id));
  }
}
