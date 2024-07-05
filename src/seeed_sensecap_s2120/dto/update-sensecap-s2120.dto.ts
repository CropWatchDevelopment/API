import { PartialType } from '@nestjs/swagger';
import { CreateSensecapS2120Dto } from './create-sensecap-s2120.dto';

export class UpdateSensecapS2120Dto extends PartialType(CreateSensecapS2120Dto) {}
