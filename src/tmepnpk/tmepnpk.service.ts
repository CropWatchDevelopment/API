import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { paginate } from '../common/pagination.util';
import { CreateTmepnpkDto } from './dto/create-tmepnpk.dto';
import { UpdateTmepnpkDto } from './dto/update-tmepnpk.dto';

@Injectable()
export class TmepnpkService {
  constructor(private prisma: PrismaService) {}

  async create(createTmepnpkDto: CreateTmepnpkDto) {
    return this.prisma.cw_ss_tmepnpk.create({
      data: createTmepnpkDto,
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

    const paginationOptions = paginate({ where }, page, +limit);

    const records = await this.prisma.cw_ss_tmepnpk.findMany(paginationOptions);
    return records.map(record => this.convertBigIntToString(record));
  }

  async findOne(id: bigint) {
    const record = await this.prisma.cw_ss_tmepnpk.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async update(id: bigint, updateTmepnpkDto: UpdateTmepnpkDto) {
    const record = await this.prisma.cw_ss_tmepnpk.update({
      where: { id },
      data: updateTmepnpkDto,
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async remove(id: bigint) {
    return this.prisma.cw_ss_tmepnpk.delete({
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
