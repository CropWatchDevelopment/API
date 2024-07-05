import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSensecapS2120Dto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dev_eui: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  profile_id: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  temperatureC: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  humidity: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  rainfall: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  pressure: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  wind_speed: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  wind_direction: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  lux: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  uv: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  frame_id: number;
}
