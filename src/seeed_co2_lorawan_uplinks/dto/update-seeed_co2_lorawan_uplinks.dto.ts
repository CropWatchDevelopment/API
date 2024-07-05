import { PartialType } from '@nestjs/swagger';
import { CreateSeeedCo2LorawanUplinksDto } from './create-seeed_co2_lorawan_uplinks.dto';

export class UpdateSeeedCo2LorawanUplinksDto extends PartialType(CreateSeeedCo2LorawanUplinksDto) {}
