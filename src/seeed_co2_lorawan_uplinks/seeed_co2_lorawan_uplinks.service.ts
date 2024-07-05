import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateSeeedCo2LorawanUplinksDto } from './dto/create-seeed_co2_lorawan_uplinks.dto';
import { UpdateSeeedCo2LorawanUplinksDto } from './dto/update-seeed_co2_lorawan_uplinks.dto';
import { paginate } from '../common/pagination.util';

@Injectable()
export class SeeedCo2LorawanUplinksService {
  constructor(private prisma: PrismaService) {}

  async create(createSeeedCo2LorawanUplinksDto: CreateSeeedCo2LorawanUplinksDto) {
    return this.prisma.seeed_co2_lorawan_uplinks.create({
      data: createSeeedCo2LorawanUplinksDto,
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

    const records = await this.prisma.seeed_co2_lorawan_uplinks.findMany(paginationOptions);
    return records.map(record => this.convertBigIntToString(record));
  }

  async findOne(id: bigint) {
    const record = await this.prisma.seeed_co2_lorawan_uplinks.findUnique({
      where: { id: Number(id) },
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async update(id: bigint, updateSeeedCo2LorawanUplinksDto: UpdateSeeedCo2LorawanUplinksDto) {
    const record = await this.prisma.seeed_co2_lorawan_uplinks.update({
      where: { id: Number(id) },
      data: updateSeeedCo2LorawanUplinksDto,
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return this.convertBigIntToString(record);
  }

  async remove(id: bigint) {
    return this.prisma.seeed_co2_lorawan_uplinks.delete({
      where: { id: Number(id) },
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
