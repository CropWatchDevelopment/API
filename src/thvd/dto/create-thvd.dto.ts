import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateThvdDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  dew_point_c: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  humidity: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  temperatureC: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  vpd: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dev_eui: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  profile_id: string;
}
