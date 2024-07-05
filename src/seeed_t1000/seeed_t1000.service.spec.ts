import { Test, TestingModule } from '@nestjs/testing';
import { SeeedT1000Service } from './seeed_t1000.service';

describe('SeeedT1000Service', () => {
  let service: SeeedT1000Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeeedT1000Service],
    }).compile();

    service = module.get<SeeedT1000Service>(SeeedT1000Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
