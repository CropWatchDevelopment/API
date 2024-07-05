import { Module } from '@nestjs/common';
import { NetvoxRa02aService } from './netvox_ra02a.service';
import { NetvoxRa02aController } from './netvox_ra02a.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [NetvoxRa02aController],
  providers: [NetvoxRa02aService, PrismaService],
})
export class NetvoxRa02aModule {}
