import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { NetvoxRa02aService } from './netvox_ra02a.service';
import { CreateNetvoxRa02aDto } from './dto/create-netvox_ra02a.dto';
import { UpdateNetvoxRa02aDto } from './dto/update-netvox_ra02a.dto';
import { ApiTags, ApiOperation, ApiQuery, ApiParam } from '@nestjs/swagger';

@ApiTags('[Netvox] Smoke Detector (RA02A)')
@Controller('netvox-ra02a')
export class NetvoxRa02aController {
  constructor(private readonly netvoxRa02aService: NetvoxRa02aService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Netvox RA02A record' })
  async create(@Body() createNetvoxRa02aDto: CreateNetvoxRa02aDto) {
    return this.netvoxRa02aService.create(createNetvoxRa02aDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Netvox RA02A records' })
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    return this.netvoxRa02aService.findAll(skip, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Netvox RA02A record by ID' })
  @ApiParam({ name: 'id', required: true, type: Number })
  async findOne(@Param('id') id: number) {
    return this.netvoxRa02aService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Netvox RA02A record by ID' })
  @ApiParam({ name: 'id', required: true, type: Number })
  async update(@Param('id') id: number, @Body() updateNetvoxRa02aDto: UpdateNetvoxRa02aDto) {
    return this.netvoxRa02aService.update(id, updateNetvoxRa02aDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Netvox RA02A record by ID' })
  @ApiParam({ name: 'id', required: true, type: Number })
  async remove(@Param('id') id: number) {
    return this.netvoxRa02aService.remove(id);
  }
}
