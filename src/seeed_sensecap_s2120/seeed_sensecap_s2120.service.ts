import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateSensecapS2120Dto } from './dto/create-sensecap-s2120.dto';
import { UpdateSensecapS2120Dto } from './dto/update-sensecap-s2120.dto';
import { paginate } from '../common/pagination.util';

@Injectable()
export class SeeedSensecapS2120Service {
  constructor(private prisma: PrismaService) {}

  async create(createSensecapS2120Dto: CreateSensecapS2120Dto) {
    return this.prisma.seeed_sensecap_s2120.create({
      data: createSensecapS2120Dto,
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

    const records = await this.prisma.seeed_sensecap_s2120.findMany(paginationOptions);
    return records.map(record => this.convertBigIntToString(record));
  }

  async findOne(id: bigint) {
    const record = await this.prisma.seeed_sensecap_s2120.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async update(id: bigint, updateSensecapS2120Dto: UpdateSensecapS2120Dto) {
    const record = await this.prisma.seeed_sensecap_s2120.update({
      where: { id },
      data: updateSensecapS2120Dto,
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async remove(id: bigint) {
    return this.prisma.seeed_sensecap_s2120.delete({
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
