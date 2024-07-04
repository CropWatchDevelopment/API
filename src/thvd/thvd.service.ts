import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateThvdDto } from './dto/create-thvd.dto';
import { UpdateThvdDto } from './dto/update-thvd.dto';
import { paginate } from 'src/common/pagination.util';

@Injectable()
export class ThvdService {
  constructor(private prisma: PrismaService) {}

  async create(createThvdDto: CreateThvdDto) {
    return this.prisma.cw_air_thvd.create({
      data: createThvdDto,
    });
  }

  async findAll(dev_eui?: string, start?: Date, end?: Date, page: number = 1, limit: number = 1000) {
    const where: any = {};
    if (dev_eui) where.dev_eui = dev_eui;
    if (start || end) {
      where.created_at = {};
      if (start) where.created_at.gte = start;
      if (end) where.created_at.lte = end;
    }

    const paginationOptions = paginate({ where }, page, limit);

    const records = await this.prisma.cw_air_thvd.findMany(paginationOptions);
    return records.map(record => this.convertBigIntToString(record));
  }

  async findOne(id: bigint) {
    const record = await this.prisma.cw_air_thvd.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async update(id: bigint, updateThvdDto: UpdateThvdDto) {
    const record = await this.prisma.cw_air_thvd.update({
      where: { id },
      data: updateThvdDto,
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async remove(id: bigint) {
    return this.prisma.cw_air_thvd.delete({
      where: { id },
    });
  }

  private convertBigIntToString(record: any) {
    for (const key in record) {
      if (typeof record[key] === 'bigint') {
        record[key] = record[key].toString();
      }
    }
    return record;
  }
}
