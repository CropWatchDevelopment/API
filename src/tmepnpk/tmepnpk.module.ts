import { Module } from '@nestjs/common';
import { TmepnpkService } from './tmepnpk.service';
import { TmepnpkController } from './tmepnpk.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [TmepnpkController],
  providers: [TmepnpkService, PrismaService],
})
export class TmepnpkModule {}
