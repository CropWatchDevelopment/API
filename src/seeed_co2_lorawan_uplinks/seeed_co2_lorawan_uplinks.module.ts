import { Module } from '@nestjs/common';
import { SeeedCo2LorawanUplinksService } from './seeed_co2_lorawan_uplinks.service';
import { SeeedCo2LorawanUplinksController } from './seeed_co2_lorawan_uplinks.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [SeeedCo2LorawanUplinksController],
  providers: [SeeedCo2LorawanUplinksService, PrismaService],
})
export class SeeedCo2LorawanUplinksModule {}
