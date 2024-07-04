import { PartialType } from '@nestjs/swagger';
import { CreateThvdDto } from './create-thvd.dto';

export class UpdateThvdDto extends PartialType(CreateThvdDto) {}
