import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDeviceDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dev_eui: string;

  @ApiProperty({ default: 'UnNamed Device' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  type: number;

  @ApiProperty({ required: false, default: -1 })
  @IsNumber()
  @IsOptional()
  upload_interval: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  lat: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  long: number;

  @ApiProperty({ required: false })
  @IsOptional()
  installed_at: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  battery_changed_at: Date;
}
