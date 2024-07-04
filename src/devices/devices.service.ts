import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DevicesService {
  constructor(private prisma: PrismaService) {}

  async create(createDeviceDto: CreateDeviceDto) {
    return this.prisma.cw_devices.create({
      data: createDeviceDto,
    });
  }

  async findAll() {
    const devices = await this.prisma.cw_devices.findMany();
    return devices.map(device => this.convertBigIntToString(device));
  }

  async findOne(dev_eui: string) {
    const device = await this.prisma.cw_devices.findUnique({
      where: { dev_eui },
    });
    if (!device) {
      throw new NotFoundException(`Device with dev_eui ${dev_eui} not found`);
    }
    return this.convertBigIntToString(device);
  }

  async update(dev_eui: string, updateDeviceDto: UpdateDeviceDto) {
    const device = await this.prisma.cw_devices.update({
      where: { dev_eui },
      data: updateDeviceDto,
    });
    if (!device) {
      throw new NotFoundException(`Device with dev_eui ${dev_eui} not found`);
    }
    return this.convertBigIntToString(device);
  }

  async remove(dev_eui: string) {
    return this.prisma.cw_devices.delete({
      where: { dev_eui },
    });
  }

  private convertBigIntToString(device: any) {
    for (const key in device) {
      if (typeof device[key] === 'bigint') {
        device[key] = device[key].toString();
      }
    }
    return device;
  }
}
