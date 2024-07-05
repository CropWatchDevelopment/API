import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PanasonicEoliaService } from './panasonic_eolia.service';
import { PanasonicEoliaController } from './panasonic_eolia.controller';
import { PanasonicEoliaConfig } from './panasonic_eolia.config';

@Module({
  imports: [HttpModule],
  providers: [PanasonicEoliaService, PanasonicEoliaConfig],
  controllers: [PanasonicEoliaController],
  exports: [PanasonicEoliaService],
})
export class PanasonicEoliaModule {}
