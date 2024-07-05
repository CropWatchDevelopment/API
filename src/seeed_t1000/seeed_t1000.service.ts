import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateSeeedT1000Dto } from './dto/create-seeed_t1000.dto';
import { UpdateSeeedT1000Dto } from './dto/update-seeed_t1000.dto';
import { paginate } from '../common/pagination.util';

@Injectable()
export class SeeedT1000Service {
  constructor(private prisma: PrismaService) {}

  async create(createSeeedT1000Dto: CreateSeeedT1000Dto) {
    return this.prisma.seeed_t1000.create({
      data: createSeeedT1000Dto,
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

    const records = await this.prisma.seeed_t1000.findMany(paginationOptions);
    return records.map(record => this.convertBigIntToString(record));
  }

  async findOne(id: bigint) {
    const record = await this.prisma.seeed_t1000.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async update(id: bigint, updateSeeedT1000Dto: UpdateSeeedT1000Dto) {
    const record = await this.prisma.seeed_t1000.update({
      where: { id },
      data: updateSeeedT1000Dto,
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async remove(id: bigint) {
    return this.prisma.seeed_t1000.delete({
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
