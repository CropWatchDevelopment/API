import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SeeedCo2LorawanUplinksService } from './seeed_co2_lorawan_uplinks.service';
import { CreateSeeedCo2LorawanUplinksDto } from './dto/create-seeed_co2_lorawan_uplinks.dto';
import { UpdateSeeedCo2LorawanUplinksDto } from './dto/update-seeed_co2_lorawan_uplinks.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[SEEED] CO2 Sensor (S2103)')
@Controller('seeed_co2_lorawan_uplinks')
export class SeeedCo2LorawanUplinksController {
  constructor(private readonly seeedCo2LorawanUplinksService: SeeedCo2LorawanUplinksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  create(@Body() createSeeedCo2LorawanUplinksDto: CreateSeeedCo2LorawanUplinksDto) {
    return this.seeedCo2LorawanUplinksService.create(createSeeedCo2LorawanUplinksDto);
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
    return this.seeedCo2LorawanUplinksService.findAll(dev_eui, startDate, endDate, page, limit);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  findOne(@Param('id') id: string) {
    return this.seeedCo2LorawanUplinksService.findOne(BigInt(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  update(@Param('id') id: string, @Body() updateSeeedCo2LorawanUplinksDto: UpdateSeeedCo2LorawanUplinksDto) {
    return this.seeedCo2LorawanUplinksService.update(BigInt(id), updateSeeedCo2LorawanUplinksDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  remove(@Param('id') id: string) {
    return this.seeedCo2LorawanUplinksService.remove(BigInt(id));
  }
}
