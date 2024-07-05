import { Module } from '@nestjs/common';
import { SeeedT1000Service } from './seeed_t1000.service';
import { SeeedT1000Controller } from './seeed_t1000.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [SeeedT1000Controller],
  providers: [SeeedT1000Service, PrismaService],
})
export class SeeedT1000Module {}
