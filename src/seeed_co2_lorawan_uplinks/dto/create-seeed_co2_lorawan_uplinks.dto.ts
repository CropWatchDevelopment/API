import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSeeedCo2LorawanUplinksDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dev_eui: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  valid: boolean;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  err: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  payload: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  rssi: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  snr: number;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  battery: number;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  interval: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  temperature: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  humidity: number;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  co2_level: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  pressure: number;
}
