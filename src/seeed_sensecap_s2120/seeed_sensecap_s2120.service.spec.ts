import { Test, TestingModule } from '@nestjs/testing';
import { SeeedSensecapS2120Service } from './seeed_sensecap_s2120.service';

describe('SeeedSensecapS2120Service', () => {
  let service: SeeedSensecapS2120Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeeedSensecapS2120Service],
    }).compile();

    service = module.get<SeeedSensecapS2120Service>(SeeedSensecapS2120Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
