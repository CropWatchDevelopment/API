import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateNetvoxRa02aDto } from './dto/create-netvox_ra02a.dto';
import { UpdateNetvoxRa02aDto } from './dto/update-netvox_ra02a.dto';
import { paginate } from '../common/pagination.util';

@Injectable()
export class NetvoxRa02aService {
  constructor(private prisma: PrismaService) {}

  async create(createNetvoxRa02aDto: CreateNetvoxRa02aDto) {
    return this.prisma.netvox_ra02a.create({
      data: createNetvoxRa02aDto,
    });
  }

  async findAll(page: number, limit: number) {
    const pagination = paginate({}, page, limit);
    const [records, total] = await Promise.all([
      this.prisma.netvox_ra02a.findMany(pagination),
      this.prisma.netvox_ra02a.count(),
    ]);
    return {
      data: records,
      total,
      page,
      limit,
    };
  }

  async findOne(id: number) {
    const record = await this.prisma.netvox_ra02a.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return record;
  }

  async update(id: number, updateNetvoxRa02aDto: UpdateNetvoxRa02aDto) {
    const record = await this.prisma.netvox_ra02a.update({
      where: { id },
      data: updateNetvoxRa02aDto,
    });
    if (!record) {
      throw new NotFoundException(`Record with id ${id} not found`);
    }
    return record;
  }

  async remove(id: number) {
    return this.prisma.netvox_ra02a.delete({
      where: { id },
    });
  }
}
