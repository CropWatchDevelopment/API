import { PartialType } from '@nestjs/swagger';
import { CreateNetvoxRa02aDto } from './create-netvox_ra02a.dto';

export class UpdateNetvoxRa02aDto extends PartialType(CreateNetvoxRa02aDto) {}
