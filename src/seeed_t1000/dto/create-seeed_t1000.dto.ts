import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSeeedT1000Dto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dev_eui: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  sos: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  battery_level: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  temperatureC: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  profile_id: string;
}
