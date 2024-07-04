import { Module } from '@nestjs/common';
import { ThvdService } from './thvd.service';
import { ThvdController } from './thvd.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [ThvdController],
  providers: [ThvdService, PrismaService],
})
export class ThvdModule {}
