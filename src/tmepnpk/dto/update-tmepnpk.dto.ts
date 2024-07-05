import { PartialType } from '@nestjs/swagger';
import { CreateTmepnpkDto } from './create-tmepnpk.dto';

export class UpdateTmepnpkDto extends PartialType(CreateTmepnpkDto) {}
