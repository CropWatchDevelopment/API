import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SeeedSensecapS2120Service } from './seeed_sensecap_s2120.service';
import { CreateSensecapS2120Dto } from './dto/create-sensecap-s2120.dto';
import { UpdateSensecapS2120Dto } from './dto/update-sensecap-s2120.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('seeed_sensecap_s2120')
@Controller('seeed_sensecap_s2120')
export class SeeedSensecapS2120Controller {
  constructor(private readonly seeedSensecapS2120Service: SeeedSensecapS2120Service) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  create(@Body() createSensecapS2120Dto: CreateSensecapS2120Dto) {
    return this.seeedSensecapS2120Service.create(createSensecapS2120Dto);
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
    return this.seeedSensecapS2120Service.findAll(dev_eui, startDate, endDate, page, limit);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  findOne(@Param('id') id: string) {
    return this.seeedSensecapS2120Service.findOne(BigInt(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  update(@Param('id') id: string, @Body() updateSensecapS2120Dto: UpdateSensecapS2120Dto) {
    return this.seeedSensecapS2120Service.update(BigInt(id), updateSensecapS2120Dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: string) {
    return this.seeedSensecapS2120Service.remove(BigInt(id));
  }
}
