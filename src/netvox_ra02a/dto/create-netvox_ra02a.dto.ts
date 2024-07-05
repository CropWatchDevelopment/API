import { ApiProperty } from '@nestjs/swagger';

export class CreateNetvoxRa02aDto {
  @ApiProperty()
  dev_eui: string;

  @ApiProperty()
  fireAlarm: number;

  @ApiProperty()
  highTempAlarm: number;

  @ApiProperty()
  temperatureC: number;

  @ApiProperty()
  battery: number;

  @ApiProperty()
  profile_id?: string;
}
