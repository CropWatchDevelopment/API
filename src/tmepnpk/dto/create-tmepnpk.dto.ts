import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTmepnpkDto {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  soil_EC: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  soil_moisture: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  soil_temperatureC: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  soil_PH: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dev_eui: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  soil_N: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  soil_P: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  soil_K: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  modbusAttempts: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  internalTemp: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  batteryVoltage: number;
}
