import { Test, TestingModule } from '@nestjs/testing';
import { SeeedSensecapS2120Controller } from './seeed_sensecap_s2120.controller';

describe('SeeedSensecapS2120Controller', () => {
  let controller: SeeedSensecapS2120Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeeedSensecapS2120Controller],
    }).compile();

    controller = module.get<SeeedSensecapS2120Controller>(SeeedSensecapS2120Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
