import { Controller, Get, Query } from '@nestjs/common';
import { PanasonicEoliaService } from './panasonic_eolia.service';
import { ApiTags, ApiQuery, ApiOperation } from '@nestjs/swagger';

@ApiTags('Panasonic Eolia')
@Controller('panasonic-eolia')
export class PanasonicEoliaController {
  constructor(private readonly eoliaService: PanasonicEoliaService) {}

  @Get('auth-check')
  @ApiOperation({ summary: 'Check authentication status' })
  async authCheck() {
    return this.eoliaService.authCheck();
  }

  @Get('devices')
  @ApiOperation({ summary: 'Get all devices' })
  async getDevices() {
    return this.eoliaService.devices();
  }

  @Get('device-status')
  @ApiQuery({ name: 'deviceId', required: true, type: String })
  @ApiOperation({ summary: 'Get device status by device ID' })
  async getDeviceStatus(@Query('deviceId') deviceId: string) {
    return this.eoliaService.deviceStatus(deviceId);
  }

  @Get('product-functions')
  @ApiQuery({ name: 'productCode', required: true, type: String })
  @ApiOperation({ summary: 'Get product functions by product code' })
  async getProductFunctions(@Query('productCode') productCode: string) {
    return this.eoliaService.productFunctions(productCode);
  }
}
