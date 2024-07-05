import { Module } from '@nestjs/common';
import { SeeedSensecapS2120Service } from './seeed_sensecap_s2120.service';
import { SeeedSensecapS2120Controller } from './seeed_sensecap_s2120.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [SeeedSensecapS2120Controller],
  providers: [SeeedSensecapS2120Service, PrismaService],
})
export class SeeedSensecapS2120Module {}
