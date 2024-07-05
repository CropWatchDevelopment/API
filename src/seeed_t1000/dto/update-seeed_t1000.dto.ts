import { PartialType } from '@nestjs/swagger';
import { CreateSeeedT1000Dto } from './create-seeed_t1000.dto';

export class UpdateSeeedT1000Dto extends PartialType(CreateSeeedT1000Dto) {}
